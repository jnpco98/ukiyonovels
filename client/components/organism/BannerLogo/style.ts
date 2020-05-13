import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { logo } from '@icons';
import * as M from '@utilities/media';

const DynamicIcon = dynamic(() => import('@components/molecule/DynamicIcon'), { ssr: false });

export const Container = styled.div`
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