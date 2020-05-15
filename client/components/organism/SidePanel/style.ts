import styled from "styled-components";
import List from "@components/molecule/List";
import TextBlock from "@components/molecule/TextBlock";
import * as M from '@utilities/media';
import Layout from "@layout/Layout";

export const QuickFilter = styled(List)`
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const Container = styled(Layout)`
  ${M.MEDIA_MEDIUM} {
    ${QuickFilter}:nth-child(1) {
      margin-top: 2rem;
    }
  }
`;

export const Text = styled(TextBlock)`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;
`;
