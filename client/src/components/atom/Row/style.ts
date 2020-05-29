import styled, { css } from 'styled-components';
import Text, { TextType } from '@components/atom/Text';
import { subsectionFontSize } from '@utilities/mixins';
import { RowType } from '.';
import * as M from '@utilities/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled(Text).attrs({ textType: TextType.Anchor })`
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.bold};

  &:after {
    content: none;
  }
`;

export const Secondary = styled(Text).attrs({ textType: TextType.Anchor })`
  &:after {
    content: none;
  }
`;

export const Container = styled.div<{ rowType: RowType }>`
  width: 100%;
  display: flex;

  & > * {
    margin-right: 0.8rem;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  ${M.MEDIA_SMALL} {
    & > * {
      margin-right: 1.5rem;
    }
  }

  ${props => 
    props.rowType === 'preview' ? css`
      & > *:nth-child(1) {
        width: 50%;
      }
      & > *:nth-child(2) {
        width: 30%;
      }
      & > *:nth-child(3) {
        width: 20%;
      }
    ` :
    props.rowType === 'alternate' ? css`
      justify-content: flex-start;

      ${Secondary} {
        ${subsectionFontSize};
        font-weight: ${({ theme }) => theme.font.bold};
        font-family: ${({ theme }) => theme.font.secondary};
      }

      & > * {
        margin-right: 0.5rem;
      }

    ` : css`
      justify-content: space-between;
    `}
`;