import styled from 'styled-components';
import Text from '@components/atom/Text';
import { subsectionFontSize } from '@utilities/mixins';

export const Container = styled.a<{ alternate?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${props => props.alternate ? 'flex-start' : 'space-between;'};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.bold};
`;

export const Prefix = styled(Text)`
  ${subsectionFontSize};
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.bold};
  margin-right: 0.5rem;
`;