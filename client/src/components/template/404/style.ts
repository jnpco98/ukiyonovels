import styled from 'styled-components/macro';
import { PageTitle, SubsectionTitle } from '../../atom/text/style';
import { gutter, GUTTER_TOP, GUTTER_BOTTOM } from '../../../utilities/mixins';


export const PageNotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  ${gutter(GUTTER_TOP)};
  ${gutter(GUTTER_BOTTOM)};
`;

export const PageNotFoundHeading = styled(PageTitle)`
  font-family: ${({ theme, ...props }) => theme.font.primary};
`;

export const PageNotFoundSubheading = styled(SubsectionTitle)``;