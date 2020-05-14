import styled from 'styled-components';
import Text, { TextType } from '@components/atom/Text';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Heading = styled(Text).attrs({ textType: TextType.SectionTitle })`
  text-transform: uppercase;
  text-align: center;
`;