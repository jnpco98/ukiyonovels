import styled from 'styled-components';
import Text, { TextType } from '@components/atom/Text';

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Link = styled(Text).attrs({ textType: TextType.Anchor })`
  align-self: center;
  margin-top: 0.5rem;
`;