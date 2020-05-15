import styled, { css } from 'styled-components';
import Card from '@components/molecule/Card';
import WideCard from '@components/molecule/WideCard';
import Text, { TextType } from '@components/atom/Text';
import * as M from '@utilities/media';
import { Responsive } from '.';

export const Standard = styled(Card)``;

export const Wide = styled(WideCard)``;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Heading = styled(Text).attrs({ textType: TextType.SectionTitle })`
  text-transform: uppercase;
  text-align: center;

  ${M.MEDIA_MEDIUM} {
    margin-top: 2rem;
  }
`;

export const Wrapper = styled.div<{ responsive?: Responsive }>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${props => {
    if(!props.responsive) return css``;
    const { cardsPerRow, breakpoints } = props.responsive;
    return css`
      ${Standard}, ${Wide} {
        ${cardsPerRow && css`
          height: auto;
          width: ${100 / cardsPerRow}%;
        `}

        ${Object.keys(breakpoints)
          .reduce((mqs, breakpoint) => css`
            ${mqs}
            ${breakpoint} {
              height: auto;
              width: ${100 / breakpoints[breakpoint]}%;
          }`, css``)
        }
      }
    `;
  }};
`;