import styled from 'styled-components';
import { pageTitleStyle, sectionTitleStyle, subsectionTitleStyle, regularTextStyle, anchorTextStyle } from '@components/atom/Text/style';

export const Container = styled.div`
  width: 100%;
  text-align: left;

  section {
    margin-bottom: 3rem;
  }
  
  h1 {
    ${pageTitleStyle};
  }

  h2 {
    ${sectionTitleStyle};
  }

  h3 {
    ${subsectionTitleStyle};
  }

  ul {
    list-style: circle;
    padding-left: 2rem;
  }

  h4, h5, h6, p, span, label {
    ${regularTextStyle};
  }

  a {
    ${anchorTextStyle};
  }

  p {
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: circle;
    padding-left: 2rem;
  }

  .is-center {
    text-align: center;
  }
`;
