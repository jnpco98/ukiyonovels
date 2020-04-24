import styled, { css } from 'styled-components';
import { Paragraph } from '@components/atom/Text/style';
import * as M from '@utilities/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircle } from '@fortawesome/free-solid-svg-icons';
import { center, CENTER_VERTICAL, smallFontSize } from '@utilities/mixins';

export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
  color: rgba(255,255,255,0.6);
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
  font-weight: bold;

  ${M.MEDIA_SMALL} {
    margin: 0.1rem 0;
  }

  ${M.MEDIA_MEDIUM} {
    margin: 0.3rem 0;
  }
`;

export const DotSeparator = styled(FontAwesomeIcon).attrs({ icon: faCircle })`
  font-size: 1.1rem;
  height: 0.3rem;
`;

export const DetailsInfo = styled.p`
  ${smallFontSize};
  ${center(CENTER_VERTICAL)};

  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  opacity: 0;
`;

export const Fill = styled.div<{ fill: number }>`
  width: 100%;
  height: 2rem;
  transition: all 0.3s ease;
  position: relative;

  ${({ theme, ...props }) =>
    css`
      background-color: rgba(255, 255, 255, 0.1);
      background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6));
      background-size: ${props.fill * 100}% 100%;
      background-repeat: no-repeat;
    `}

  &:hover {
    transform: scale(1.06, 1.06);
    background: ${({ theme }) => theme.colors.primary};
    ${DetailsInfo} {
      left: 3%;
      opacity: 1;
    }
  }
`;

export const RatingIcon = styled(FontAwesomeIcon).attrs({ icon: faStar })`
  ${center(CENTER_VERTICAL)};
`;

export const Container = styled.div`
  width: 100%;
`;
