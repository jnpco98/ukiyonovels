import styled, { css } from "styled-components";
import Text, { TextType } from "@components/atom/Text";
import { ratioImage } from "@utilities/mixins";
import Layout from "@layout/Layout";
import * as M from 'utilities/media'
import { TabbedList } from "@components/molecule/Card/style";

export const Heading = styled(Text).attrs({ textType: TextType.PageTitle })``;

export const Primary = styled(Layout).attrs({ gutterRight: true })`
  ${M.MEDIA_XSMALL} {
    ${props => props.gutterLeft && css`margin-left: 1.5rem;`};
    ${props => props.gutterRight && css`margin-right: 1.5rem;`};
  }

  ${M.MEDIA_LARGE} {
    ${props => props.gutterLeft && css`margin-left: 2rem;`};
    ${props => props.gutterRight && css`margin-right: 2rem;`};
  }
`;

export const Wrapper = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    width: 100%;
  }

  ${M.MEDIA_XSMALL} {
    flex-direction: row;

    & > *:nth-child(1) {
      width: 30%;
    }

    & > *:nth-child(2) {
      width: 70%;
    }
  }
`;

export const FeaturedImage = styled.img``;

export const FeaturedImageWrapper = styled.div`
  ${ratioImage(FeaturedImage, '100%', '150%')};
  margin-bottom: 1.4rem;
`;

export const SubHeading = styled(Text).attrs({ textType: TextType.SubsectionTitle })`
  margin-bottom: 1rem;
`;

export const Classifications = styled(TabbedList)`
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 1.5rem;
  }
`;

export const Description = styled.div`
  margin-bottom: 1.5rem;

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 1.5rem;
  }
`;