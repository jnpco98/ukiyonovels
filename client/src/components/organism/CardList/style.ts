import styled, { css } from 'styled-components';
import Card from '@components/molecule/Card';
import WideCard from '@components/molecule/WideCard';
import Text, { TextType } from '@components/atom/Text';
import { responsive, Responsive } from '@utilities/mixins';

export const Standard = styled(Card)``;

export const Wide = styled(WideCard)``;

export const Container = styled.div`
  width: 100%;
`;

export const Heading = styled(Text).attrs({ textType: TextType.SectionTitle })`
  text-align: center;
  margin-bottom: 2.1rem;
`;

export const Wrapper = styled.div<{ responsive?: Responsive }>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 2rem;

  ${props => {
    if(!props.responsive) return css``;

    return css`
      ${Standard}, ${Wide} {
        ${responsive(props.responsive, (itemsPerRow, gap) => css`
          height: auto;
          width: ${100 / itemsPerRow}%;
          padding-right: ${gap || 0.5}rem;
        `)}
      }
    `;
  }};
`;