import styled from 'styled-components/macro';
import Button from '../../atom/button';
import * as M from '../../../settings/media';
import Text, { TextType } from '../../atom/text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { Paragraph, SubsectionTitle } from '../../atom/text/style';
import DynamicHTML from '../dynamic-html';

export const InfoCardContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme, ...props }) => theme.colors.default};
`;

export const InfoCardContent = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 1rem;

  ${M.MEDIA_MEDIUM} {
    margin-left: 1.5rem;
  }

  ${M.MEDIA_XLARGE} {
    margin-left: 2rem;
  }
`;

export const InfoCardTitle = styled(SubsectionTitle)`
  max-width: 90%;
  margin: 0 0 0.2rem;

  ${M.MEDIA_SMALL} {
    margin: 0 0 0.4rem;
  }

  ${M.MEDIA_MEDIUM} {
    margin: 0 0 0.5rem;
  }
`;

export const InfoCardDescription = styled(DynamicHTML)`
  margin: 0.4rem 0;

  ${M.MEDIA_MEDIUM} {
    margin: 0 0 0.5rem;
  }
`;

export const InfoCardMetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoCardButtonContinue = styled(Button)`
  align-self: baseline;
`;

export const InfoCardMeta = styled.div`
  margin: 0 0 0.4rem;

  ${M.MEDIA_MEDIUM} {
    margin: 0 0 0.5rem;
  }
`;

export const InfoCardCalendarIcon = styled(FontAwesomeIcon).attrs({ icon: faCalendarAlt })`
  margin-right: 0.3rem;
`;

export const InfoCardLikesIcon = styled(FontAwesomeIcon).attrs({ icon: faHeart })`
  margin-right: 0.3rem;
`;

export const InfoCardViewsIcon = styled(FontAwesomeIcon).attrs({ icon: faEye })`
  margin-right: 0.3rem;
`;

export const InfoCardText = styled(Text).attrs({ textType: TextType.Span })`
  margin-right: 0.7rem;
`;
