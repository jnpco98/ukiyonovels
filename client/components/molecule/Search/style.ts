import styled, { css } from 'styled-components';
import dynamic from 'next/dynamic';
import { center, CENTER_BOTH, subsectionFontSize } from '@utilities/mixins';
import { search } from '@icons';
import * as M from '@utilities/media';

const DynamicIcon = dynamic(() => import('@components/molecule/DynamicIcon'), { ssr: false });

export const SearchContainer = styled.div<{ active: boolean }>`
  position: fixed;
  display: none;
  z-index: 3;

  ${props =>
    props.active &&
    css`
      display: block;
    `}
`;

export const SearchContent = styled.form`
  ${center(CENTER_BOTH)};
  display: flex;
  padding: 1rem;

  ${M.MEDIA_MEDIUM} {
    padding: 2rem;
  }
`;

export const SearchButton = styled.button.attrs({ type: 'submit' })`
  border: none;
  background: none;
  cursor: pointer;
`;

export const SearchButtonIcon = styled(DynamicIcon).attrs({ SVGString: search })`
  path {
    fill: ${({ theme }) => theme.colors.primary};
  }
  
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 1rem;

  ${M.MEDIA_XSMALL} {
    width: 1.7rem;
    height: 1.7rem;
  }

  ${M.MEDIA_MEDIUM} {
    width: 2.1rem;
    height: 2.1rem;
  }

  ${M.MEDIA_LARGE} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
  ${subsectionFontSize};
  border: none;
  background: none;
  transition: all 0.24s linear;
  color: ${({ theme }) => theme.colors.primary};
  width: 12rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${M.MEDIA_XSMALL} {
    width: 20rem;
  }

  ${M.MEDIA_LARGE} {
    width: 30rem;
  }

  ${M.MEDIA_XLARGE} {
    width: 40rem;
  }

  ${M.MEDIA_XXLARGE} {
    width: 50rem;
  }
`;