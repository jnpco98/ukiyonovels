import styled, { css } from 'styled-components/macro';
import { Paragraph } from '../text/style';
import * as M from '../../../settings/media';

type BarFillProps = {
  rating: number;
}

export const BarTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
`;

export const BarTitle = styled(Paragraph)`
  font-family: ${({ theme, ...props }) => theme.font.secondary};

  ${M.MEDIA_SMALL} {
    margin: 0.1rem 0;
  }

  ${M.MEDIA_MEDIUM} {
    margin: 0.3rem 0;
  }
`;

export const BarRating = styled(Paragraph)`
  font-family: ${({ theme, ...props }) => theme.font.secondary};

  ${M.MEDIA_SMALL} {
    margin: 0.1rem 0;
  }

  ${M.MEDIA_MEDIUM} {
    margin: 0.3rem 0;
  }
`;

export const BarFill = styled.div<BarFillProps>`
  width: 100%;
  height: 0.4rem;

  &.is-rounded {
    border-radius: 0.5rem;
  }

  ${({ theme, ...props }) =>
    css`
      background-color: ${theme.colors.primary};
      background-image: linear-gradient(90deg, ${theme.colors.black}, ${theme.colors.black});
      background-size: ${props.rating * 100}% 100%;
      background-repeat: no-repeat;
    `   
  }
`;

export const BarContainer = styled.div`
  width: 100%;

  &.is-rounded {
    ${BarFill} {
      border-radius: 0.5rem;
    }
  }
`;
