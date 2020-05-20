import styled from 'styled-components';
import { xSmallFontSize } from '@utilities/mixins';
import Text, { TextType } from '@components/atom/Text';

export const Item = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 0.1rem 0.4rem;
  border-radius: 1rem;
  margin-bottom: 0.2rem;
  margin-right: 0.3rem;
`;

export const Container = styled.div`
  ${xSmallFontSize};
  display: block;
  margin-top: 0.6rem;
`;

export const Heading = styled(Text).attrs({ textType: TextType.SubsectionTitle })`
  margin-bottom: 1rem;
`;