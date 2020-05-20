import styled, { css } from 'styled-components';
import dynamic from 'next/dynamic';
import { center, CENTER_BOTH, subsectionFontSize } from '@utilities/mixins';
import { search } from '@icons';
import * as M from '@utilities/media';
import Text, { TextType } from '@components/atom/Text';
import { transparentize } from 'polished';

const DynamicIcon = dynamic(() => import('@components/molecule/DynamicIcon'), { ssr: false });

export const Container = styled.div<{ active: boolean }>`
  position: fixed;
  display: none;
  z-index: 3;

  ${props =>
    props.active &&
    css`
      display: block;
    `}
`;

export const Form = styled.form`
  ${center(CENTER_BOTH)};
  display: flex;
  padding: 1rem;

  ${M.MEDIA_MEDIUM} {
    padding: 2rem;
  }
`;

export const Submit = styled.button.attrs({ type: 'submit' })`
  border: none;
  background: none;
  cursor: pointer;
`;

export const Icon = styled(DynamicIcon).attrs({ SVGString: search })`
  path {
    fill: ${({ theme }) => theme.colors.primary};
  }
  
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 1rem;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  ${subsectionFontSize};
  border: none;
  background: none;
  transition: all 0.24s linear;
  color: ${({ theme }) => theme.colors.primary};
  width: 12rem;

  &::placeholder {
    color: ${({ theme }) => transparentize(0.2, theme.colors.primary)};
  }

  ${M.MEDIA_XSMALL} {
    width: 20rem;
  }
`;

export const AdvancedSearch = styled(Text).attrs({ textType: TextType.Anchor })`
  z-index: 80;
  margin-top: 5rem;
  position: relative;
`;