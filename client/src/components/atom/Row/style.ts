import styled from 'styled-components';
import Text, { TextType } from '@components/atom/Text';
import { subsectionFontSize } from '@utilities/mixins';

export const Container = styled.div<{ alternate?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${props => props.alternate ? 'flex-start' : 'space-between;'};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled(Text).attrs({ textType: TextType.Anchor })`
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.bold};

  &:after {
    content: none;
  }
`;

export const Prefix = styled(Text).attrs({ textType: TextType.Anchor })`
  ${subsectionFontSize};
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.bold};
  margin-right: 0.5rem;
  
  &:after {
    content: none;
  }
`;