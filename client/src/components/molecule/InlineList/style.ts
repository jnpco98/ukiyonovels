import styled from 'styled-components';
import { smallFontSize } from '@utilities/mixins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export const Divider = styled(FontAwesomeIcon).attrs({ icon: faCircle })`
  font-size: 1.1rem;
  height: 0.3rem;
`;

export const DividerWrapper = styled.span`
  height: 100%;
  display: inline-flex;
`;

export const Container = styled.div`
  ${smallFontSize};
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0.6rem;
`;