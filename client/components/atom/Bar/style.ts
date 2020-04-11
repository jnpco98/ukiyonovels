import styled, { css } from 'styled-components';
import { Paragraph } from '@components/atom/Text/style';
import * as M from '@utilities/media';

type FillProps = {
  fill: number;
};

export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
`;

export const Title = styled.a`
  font-family: ${({ theme }) => theme.font.secondary};

  ${M.MEDIA_SMALL} {
    margin: 0.1rem 0;
  }

  ${M.MEDIA_MEDIUM} {
    margin: 0.3rem 0;
  }
`;

export const Rating = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.secondary};

  ${M.MEDIA_SMALL} {
    margin: 0.1rem 0;
  }

  ${M.MEDIA_MEDIUM} {
    margin: 0.3rem 0;
  }
`;

export const Fill = styled.div<FillProps>`
  width: 100%;
  height: 0.4rem;

  &.is-rounded {
    border-radius: 0.5rem;
  }

  ${({ theme, ...props }) =>
    css`
      background-color: ${theme.colors.primary};
      background-image: linear-gradient(90deg, ${theme.colors.default}, ${theme.colors.default});
      background-size: ${props.fill * 100}% 100%;
      background-repeat: no-repeat;
    `}
`;

export const Container = styled.div`
  width: 100%;

  &.is-rounded {
    ${Fill} {
      border-radius: 0.5rem;
    }
  }
`;
