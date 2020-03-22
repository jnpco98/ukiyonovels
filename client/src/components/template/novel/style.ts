import { regularFontSize, gutter, GUTTER_RIGHT, GUTTER_LEFT, ratioImage, GUTTER_TOP, GUTTER_BOTTOM } from "../../../utilities/mixins";
import styled from "styled-components/macro";
import { SubsectionTitle, SectionTitle, PageTitle } from "../../atom/text/style";
import * as M from '../../../settings/media';
import { ClassificationsContainer } from "../../molecule/classifications/style";
import { DynamicHTMLContainer } from "../../molecule/dynamic-html/style";
import { AccordionContainer } from "../../molecule/accordion/style";
import SidePanel from "../../organism/side-panel";

export const NovelContainer = styled.div`
  ${gutter(GUTTER_TOP)};
  ${gutter(GUTTER_BOTTOM)};
  
  ${M.MEDIA_MEDIUM} {
    display: flex;
  }
`;

export const NovelWrapper = styled.div`
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  ${M.MEDIA_MEDIUM} {
    padding-right: 0;
  }

  ${M.MEDIA_MEDIUM} {
    flex: 1;
  }
`;

export const NovelTitle = styled(PageTitle)`
  ${M.MEDIA_SMALL} {
    margin-bottom: 2rem;
  }

  ${M.MEDIA_LARGE} {
    margin-bottom: 3rem;
  }
`;

export const NovelPortrait = styled.img`
`;

export const NovelPortraitWrapper = styled.div`
  ${ratioImage(NovelPortrait, '100%', '150%')};
  margin-bottom: 1.5rem;

  ${M.MEDIA_LARGE} {
    margin-bottom: 2rem;
  }
`;

export const NovelContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${M.MEDIA_MEDIUM} {
    flex-direction: row;
  }
`;

export const NovelContent = styled.div`
  width: 100%;

  ${ClassificationsContainer}, 
  ${DynamicHTMLContainer}, 
  ${AccordionContainer} {
    margin-bottom: 1rem;
  }

  ${ClassificationsContainer} + ${AccordionContainer} {
    margin-top: 2rem;
  }

  & + & {
    margin-bottom: 2rem;
  }

  ${M.MEDIA_MEDIUM} {
    &:first-child {
      padding-right: 3rem;
      flex: 0.6;
    }

    & + & {
      padding-left: 0;
      flex: 1;
    }
  }

  ${M.MEDIA_MEDIUM} {
    &:first-child {
      padding-right: 3rem;
    }
  }

  ${M.MEDIA_LARGE} {
    ${ClassificationsContainer}, 
    ${DynamicHTMLContainer}, 
    ${AccordionContainer} {
      margin-bottom: 1.5rem;
    }
  }

  ${M.MEDIA_XXLARGE} {
    &:first-child {
      flex: 0.4;
      padding-right: 6rem;
    }
  }
`;

export const NovelDescriptionHeading = styled(SubsectionTitle)`
  ${regularFontSize};

  width: 100%;
  margin: 0.5rem 0;

  ${M.MEDIA_MEDIUM} {
    margin: 0.75rem 0;
  }
`;

export const NovelTitleWrapper = styled.div`
  width: 100%;
`;

export const NovelSidePanel = styled(SidePanel)`
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  ${M.MEDIA_MEDIUM} {
    padding-left: 2rem;
    margin-top: 0.7rem;
    flex: 0.4;
  }

  ${M.MEDIA_LARGE} {
    padding-left: 4rem;
  }
  
  ${M.MEDIA_XXLARGE} {
    flex: 0.3;
    padding-left: 8rem;
  }
`