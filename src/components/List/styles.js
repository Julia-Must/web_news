import styled from 'styled-components';

export const LWrapper = styled.ul`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;