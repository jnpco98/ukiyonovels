import React from 'react';
import { useRouter } from 'next/router';
import Page from '@layout/Page';
import Layout from '@layout/Layout';
import dynamic from 'next/dynamic';

const DynamicHtml = dynamic(() => import('@components/molecule/DynamicHtml'), { ssr: false });

const htmlString = `
  <div class="container--content">
    <section>
      <h1 class="is-center">Privacy Policy</h1>
      <p>The following webpage outlines Readlightnovel's collection and use of personal information from it's users. Readlightnovel.com values the privacy of our members and users, we will never share any personal information of anybody who logs on to Readlightnovel with anyone. This includes your e-mail address, name, and location. Upon logging on to Readlightnovel such things as your IP address and hostname are logged for statistical and security reasons.</p>
    </section>

    <section>
      <h2 class="is-center">Cookies</h2>
      <p>A cookie is a very small text file placed on your system upon logging on to Readlightnovel (and most other websites). This file serves as your identification card and is uniquely yours, and can only be read by the server that gave it to you. Cookies tell us that you have returned to a specific web page on Readlightnovel and help us track your preferences and transactional habits. The basic function of cookies is to help our server remember who you are. </p>
    </section>

    <section>
      <h2 class="is-center">Children's Privacy</h2>
      <p>Readlightnovel does not knowingly collect personal data from children under the age of 13. We make reasonable efforts to prevent someone who is underage from joining as a member of Readlightnovel, and will not collect information from them. If Readlightnovel learns that a child under the age of 13 has become a member, we will close that child's account and delete any information collected about the child.</p>
      <p>Not withstanding the foregoing, Readlightnovel may choose to retain some personal information such as the child's e-mail address as a means to prevent the child from re-registering at our website. The Children's Online Privacy Protection Act (COPPA) went into effect in April 2000, and as a result websites all over the world wide web had to change their standards to not collect any information from a child.</p>
    </section>

    <section>
      <h2 class="is-center">Disclosing Information</h2>
      <p>Readlightnovel may store and disclose personal information allowed or required by applicable law or when deemed advisable by us. This means that we may make disclosures that are necessary to conform to legal and regulatory requirements or processes and to protect the rights, safety, and property of Readlightnovel, users of the Readlightnovel website, and the public.</p>
    </section>

    <section>
      <h2 class="is-center">Security</h2>
      <p>At Readlightnovel we make reasonable efforts to protect personal information such as passwords and use technology such as encryption, access control procedures, firewalls, and physical security. We urge you to use a unique password with both letters and numbers to protect your account on Readlightnovel and it's affiliated websites. If others, including family, friends or other household members access and use the message board through your login credentials, you are responsible for the actions of that individual. Only in extreme cases will your account be fully terminated.</p>
    </section>

    <section>
      <h2 class="is-center">Third Parties</h2>
      <p>Third Party websites may collect information from users of Readlightnovel, this information will include your IP address, hostname, and information about your system to help us serve you better. These are purely used for statistical reasons, and will not be used in any way other thenthat. Some programs that may collect this information include: eXTReMe Tracking, Google, Nedstat, and Webalizer.</p>
    </section>

    <section>
      <h2 class="is-center">Website Policy Changes</h2>
      <p>Readlightnovel reserves the right to change this, and any other policy located on our website at anytime without notifying our users.</p>
    </section>
  </div>
`;

function StandardPage() {
  const router = useRouter();
  const { pageSlug } = router.query;

  return(
    <Page>
      <Layout main navOffset footerOffset className={`page__${pageSlug}`}>
        <DynamicHtml HTMLString={htmlString}/>
      </Layout>
    </Page>
  );
}

export default StandardPage;