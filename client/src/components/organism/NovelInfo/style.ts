import styled, { css } from "styled-components";
import TabbedList from '@components/molecule/TabbedList';
import { ratioImage } from "@utilities/mixins";
import Layout from "@layout/Layout";
import * as M from '@utilities/media';

export const Container = styled(Layout)`
  ${M.MEDIA_XSMALL} {
    ${props => props.gutterLeft && css`margin-left: 1.5rem;`};
    ${props => props.gutterRight && css`margin-right: 1.5rem;`};
  }

  ${M.MEDIA_LARGE} {
    ${props => props.gutterLeft && css`margin-left: 2rem;`};
    ${props => props.gutterRight && css`margin-right: 2rem;`};
  }
`;

export const FeaturedImage = styled.img``;

export const FeaturedImageWrapper = styled.div`
  ${ratioImage(FeaturedImage, '100%', '150%')};
  margin-top: 1rem;
  margin-bottom: 1.4rem;
`;

export const Info = styled(TabbedList)`
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 1.5rem;
  }
`;