import styled from 'styled-components';
import Text from '@components/atom/Text';

export const Title = styled(Text)<{ bulleted?: boolean }>`
  position: relative;
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.bold};
`;

export const Container = styled.a<{ bulleted?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
