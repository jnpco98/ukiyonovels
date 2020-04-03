import styled, { css } from 'styled-components/macro';
import * as M from '../../../settings/media';
import Text, { TextType } from '../../atom/text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { center, CENTER_BOTH, pageTitleFontSize, sectionFontSize } from '../../../utilities/mixins';

type SearchContainerStyleProps = {
  active?: boolean;
};

export const SearchContainer = styled.div<SearchContainerStyleProps>`
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

export const SearchButtonIcon = styled(FontAwesomeIcon).attrs({ icon: faSearch })`
  ${sectionFontSize};
  color: ${({ theme, ...props }) => theme.colors.white};
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
  ${pageTitleFontSize};
  border: none;
  background: none;
  transition: all 0.24s linear;
  color: ${({ theme, ...props }) => theme.colors.white};
  width: 12rem;

  &::placeholder {
    color: ${({ theme, ...props }) => theme.colors.subdued};
  }

  ${M.MEDIA_SMALL} {
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

export const SearchSubtitle = styled(Text).attrs({ textType: TextType.Paragraph })``;

export const SearchClose = styled.button``;
