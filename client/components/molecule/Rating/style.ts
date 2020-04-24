import styled from "styled-components";
import Bar from "@components/atom/Bar";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
  border-radius: 1rem;
`;

export const FillBar = styled(Bar)`
  margin-bottom: 1rem;
`;