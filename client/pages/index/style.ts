import styled from "styled-components";
import * as M from '@utilities/media';
import Section from "@layout/Section";

export const CardCarouselSection = styled(Section)`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
`;

export const ColumnCardListSection = styled(Section)`
`;