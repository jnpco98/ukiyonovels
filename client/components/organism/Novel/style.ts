import styled from "styled-components";
import Text, { TextType } from "@components/atom/Text";
import { ratioImage } from "@utilities/mixins";

export const Heading = styled(Text).attrs({ textType: TextType.PageTitle })``;

export const Container = styled.div``;

export const Primary = styled.div``;

export const Secondary = styled.div``;

export const FeaturedImage = styled.img``;

export const FeaturedImageWrapper = styled.div`
  ${ratioImage(FeaturedImage, '100%', '150%')};
  margin-bottom: 1.4rem;
`;

export const SubHeading = styled(Text).attrs({ textType: TextType.SubsectionTitle })`
  margin-bottom: 1rem;
`;