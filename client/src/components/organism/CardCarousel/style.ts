import styled from 'styled-components';
import Text, { TextType } from '@components/atom/Text';

export const Container = styled.div`
  width: 100%;
`;

export const Heading = styled(Text).attrs({ textType: TextType.SectionTitle })`
  text-align: center;
`;