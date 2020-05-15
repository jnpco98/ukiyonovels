import styled from 'styled-components';
import Row from '@components/atom/Row';
import Text, { TextType } from '@components/atom/Text';
import * as M from '@utilities/media';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Item = styled(Row)`
  margin-bottom: 0.7rem;
  transition: all 0.15s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Heading = styled(Text).attrs({ textType: TextType.SectionTitle })`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2.1rem;
  margin-right: 0.5rem;

  ${M.MEDIA_MEDIUM} {
    margin-top: 2rem;
    margin-right: 0.8rem;
  }
`;