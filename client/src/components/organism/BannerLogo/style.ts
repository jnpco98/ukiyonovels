import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { logo } from '@icons';
import * as M from '@utilities/media';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '@utilities/mixins';

const DynamicIcon = dynamic(() => import('@components/molecule/DynamicIcon'), { ssr: false });

export const Container = styled.a`
  max-width: ${({ theme }) => theme.screen.innerMaxWidth};
  margin-left: auto;
  margin-right: auto;
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(DynamicIcon).attrs({ SVGString: logo })`
  width: 10rem;
  height: 5rem;
  margin-top: 1rem;

  path {
    fill: ${({ theme }) => theme.colors.primary};
  }

  ${M.MEDIA_SMALL} {
    width: 14rem;
    height: 8rem;
    margin-top: 2rem;
  }
`;