import styled, { css } from 'styled-components';
import Row from '@components/atom/Row';
import Text, { TextType } from '@components/atom/Text';
import { Responsive, responsive } from '@utilities/mixins';
import * as M from '@utilities/media';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Item = styled(Row)`
  padding-bottom: 0.7rem;
  transition: all 0.15s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const Heading = styled(Text).attrs({ textType: TextType.SectionTitle })`
  text-align: center;
  margin-bottom: 2.1rem;
  margin-right: 0.5rem;

  ${M.MEDIA_MEDIUM} {
    margin-top: 2rem;
    margin-right: 0.8rem;
  }
`;

export const Wrapper = styled.div<{ responsive?: Responsive }>`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;

  ${props => {
    if(!props.responsive) return css``;

    return css`
      ${Item}{
        ${responsive(props.responsive, (itemsPerRow, gap) => css`
          height: auto;
          width: ${100 / itemsPerRow}%;
          padding-right: ${gap || 0.5}rem;
        `)}
      }
    `;
  }};
`;