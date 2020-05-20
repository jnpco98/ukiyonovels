import React from 'react';
import Section from '@layout/Layout';
import Text, { TextType } from '@components/atom/Text';
import { footerMenu } from '@constants/menu';
import { t } from '@utilities/locales';
import * as S from './style';

function Footer() {
  return (
    <Section footerOffset main>
      <S.Container>
        <S.Divider />
        <S.TextGroup>
          <Text>{t('footer.copyright')}</Text>
          <S.TermsGroup>
            {footerMenu.map(({ label, link, key }) => (
              <Text textType={TextType.Anchor} link={link} key={key} decorateActive>
                {label}
              </Text>
            ))}
          </S.TermsGroup>
        </S.TextGroup>
      </S.Container>
    </Section>
  );
}

export default Footer;
