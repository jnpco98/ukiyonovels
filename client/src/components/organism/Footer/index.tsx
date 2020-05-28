import React from 'react';
import Section from '@layout/Layout';
import ConditionalWrapper from '@components/atom/ConditionalWrapper';
import Text, { TextType } from '@components/atom/Text';
import { footerMenu } from '@constants/menu';
import { t } from '@utilities/locales';
import Link from '@components/atom/Link';
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
              <ConditionalWrapper condition={!!(link && link.href)} wrapper={children => <Link as={link.as} href={link.href} passHref>{children}</Link>}>   
                <Text textType={TextType.Anchor} key={key} decorateActive>
                  {label}
                </Text>
              </ConditionalWrapper>
            ))}
          </S.TermsGroup>
        </S.TextGroup>
      </S.Container>
    </Section>
  );
}

export default Footer;
