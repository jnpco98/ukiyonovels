import styled, { css } from 'styled-components/macro';
import { SubsectionTitle } from '../../atom/text/style';
import { regularFontSize } from '../../../utilities/mixins';
import * as M from '../../../settings/media';

export const ClassificationsContainer = styled.div`
  width: 100%;
`;

export const ClassificationsHeading = styled(SubsectionTitle)`
  ${regularFontSize};
  margin-bottom: 0.3rem;

  ${M.MEDIA_SMALL} {
    margin-bottom: 0.5rem;
  }
`;

type ListStyleProps = {
  inline?: boolean;
};

export const ClassificationsList = styled.ul<ListStyleProps>`
  display: flex;
  ${props =>
    props.inline
      ? css`
          flex-wrap: wrap;
        `
      : css`
          flex-direction: column;
        `}
`;

export const ClassificationsItem = styled.li`
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
