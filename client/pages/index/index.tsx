import React from 'react';
import Page from '@layout/Page';
import Text, { TextType } from '@components/atom/Text';
import Card from '@components/molecule/Card';

const thumbnail = `https://occ-0-2954-2568.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABcvEUXtNFRBthcDmFXo8Lhc4L10J5s2WVkm9ipP6V_9fM5Jl5x8mmacyTnR8pj_Y2ZM3gaiwontqaMdQh7gG4cdELHgbILEQzg.jpg`;
const content = {
  heading: 'Kaguya-Sama: Love is War',
  inline: ['MA15+', '2014', '24Chs'],
  tabbed: ['Web Novel', 'Chinese']
}

function Index() {
  return(
    <Page>
      <Text center textType={TextType.SubsectionTitle}>Top Novels</Text>
      
      <Card
        thumbnail={thumbnail}
        content={content}
      />
      <div style={{ height: '200vh' }}/>
    </Page>
  );
}

export default Index;