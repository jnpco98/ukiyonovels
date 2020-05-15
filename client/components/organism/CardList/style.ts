import styled, { css } from 'styled-components';
import Card from '@components/molecule/Card';
import WideCard from '@components/molecule/WideCard';
import Text, { TextType } from '@components/atom/Text';
import Button from '@components/atom/Button';
import { Responsive } from '.';

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
  justify-content: space-between;
  margin-bottom: 2rem;

  ${props => {
    if(!props.responsive) return css``;
    const { cardsPerRow, gap, breakpoints } = props.responsive;
    return css`
      ${Standard}, ${Wide} {
        ${cardsPerRow && css`
          height: auto;
          width: calc(${100 / cardsPerRow}% - ${cardsPerRow * (gap || 0.5)}rem);
        `}

        ${Object.keys(breakpoints)
          .reduce((mqs, breakpoint) => css`
            ${mqs}
            ${breakpoint} {
              height: auto;
              width: calc(${100 / breakpoints[breakpoint].cardsPerRow}% - ${cardsPerRow * (breakpoints[breakpoint].gap || 0.5)}rem);
          }`, css``)
        }
      }
    `;
  }};
`;

export const CtaButton = styled(Button)`
  width: 100%;
`;