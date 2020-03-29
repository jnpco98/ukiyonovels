import fs, { readdirSync } from 'fs-extra';

import LOG from './log';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import path from 'path';
import sanitize from 'sanitize-html';

function getDirectories(source) {
  return readdirSync(source, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
}

function extractNovelInfo(html, title) {
  const $ = cheerio.load(html);
  const thumbnail = $('.novel-cover img').attr('src');

  const { type, genre, tags, language, author, artist, year, status } = 
    $('.novel-left .novel-details > .novel-detail-item')
      .map((_, nl) => ({ 
        label: $(nl).find('.novel-detail-header h6').text().replace('(s)', "").toLowerCase(),
        value: $(nl).find('.novel-detail-body li')
          .map((_, nli) => $(nli).text()).toArray()
      }))
      .toArray()
      .reduce((acc, curr) => ({ ...acc, [curr.label]: curr.value }), {});

  const { related_series, you_may_also_like, alternative_names } = $('.novel-right .novel-details > .novel-detail-item')
    .map((_, nl) => ({ 
        label: $(nl).find('.novel-detail-header h6').text(),
        value: $(nl).find('.novel-detail-body li')
          .map((_, nli) => $(nli).text()).toArray()
      }))
      .toArray()
      .reduce((acc, curr) => ({ ...acc, [curr.label.replace('(s)', '').replace(/\s+/g, '_').toLowerCase()]: curr.value }), {});

  const { description } = $('.novel-right .novel-details > .novel-detail-item')
    .map((_, nl) => ({ 
      label: $(nl).find('.novel-detail-header h6').text(),
      value: $(nl).find('.novel-detail-body > *').toArray().map(a => $(a).html())
    }))
    .toArray()
    .reduce((acc, curr) => ({ 
      ...acc, [curr.label.replace('(s)', '').replace(/\s+/g, '_').toLowerCase()]: 
        curr.value.map(nlv => sanitize(nlv).split(/<br\s*\/?>/).filter(nlv => nlv)).reduce((acc, curr) => [ ...acc, ...curr ], [])
    }), {});

  const output = { coverImage: thumbnail, mediaGallery: [thumbnail], description, type: type[0], genres: genre, tags: tags, origins: language, authors: author, artists: artist, year: year >> 0, status: status[0], alternativeNames: alternative_names };

  if(Array.isArray(output.description)) 
    output.description = output.description.filter(d => d.toLowerCase() !== 'n/a')

  if(output.description && output.description.length) {
    output.description = output.description.reduce((acc, curr) => `${acc}<p>${curr}</p>`, '')
    if(output.description.length < 20) {
      LOG.error(title, output.description)
      delete output.description;
    }
  }
  else
    delete output.description;
  
  Object.keys(output).forEach(k => {
    const val = output[k];
    
    if(Array.isArray(val)) {
      output[k] = output[k].filter(v => v && v.toLowerCase() !== 'n/a');
      if(!output[k].length) {
        delete output[k];
      }
      else {
        output[k] = JSON.stringify(output[k]);
      }
    }
      
    if(typeof val === 'string' && (val.toLowerCase() === 'n/a' || !val.length))
      delete output[k];

    if(!val) delete output[k];
  });
  
  return output;
}

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1OVBxbm1LY1VMaUdnQUxYQlBoSjAiLCJyb2xlIjoiT1dORVIiLCJpYXQiOjE1ODU0Mzc2NjgsImV4cCI6MTU4NTY5Njg2OH0.lSJF5q8E-yQsI5qI0AKa57D0gk-9Xe_OsBz5a3cj-1c';
const endpoint = 'http://localhost:5000/graphql';

const query = `
  mutation($ncData: NovelInput!) {
    novelCreate(data: $ncData) {
      id
      title
    }
  }
`;

const IMPORT_NOVEL = true;

async function main() {
  const novelDirs = getDirectories('data');

  let exit = 0;
  
  if(IMPORT_NOVEL) {
    for(const dir of novelDirs) {
      const rootPath = path.resolve(__dirname, 'data', dir);
      const { title, info: html } = JSON.parse(fs.readFileSync(path.resolve(rootPath, 'root.json')));
  
      const info = extractNovelInfo(html, title);
  
      if(exit) return;
  
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` },
        body: JSON.stringify({ query, variables: { ncData: { title, ...info } } })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.errors) {
            console.log('errordata', { title, ...info });
            console.log(JSON.stringify(data.errors, null, 2));
            exit = 1;
          }
      });
    }
  }
}

main().catch(e => console.error(JSON.stringify(e)));