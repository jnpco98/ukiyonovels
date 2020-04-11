import styled from 'styled-components/macro';
import { CENTER_BOTH, center } from '../../../utilities/mixins';
import * as M from '../../../settings/media';

type SettingsContainerStyleProps = {
  active?: boolean;
};

export const SettingsContainer = styled.div<SettingsContainerStyleProps>`
  position: relative;
  width: 20rem;
  height: 20rem;
`;

export const SettingsContent = styled.div`
  ${center(CENTER_BOTH)};
  display: flex;
  padding: 1rem;
  width: 100%;
  height: 100%;

  ${M.MEDIA_MEDIUM} {
    padding: 2rem;
  }
`;