import styled from 'styled-components';

export const NavBar = styled.div`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-bottom-left-radius: ${({ theme }) => theme.spacing(2.5)};
  border-bottom-right-radius: ${({ theme }) => theme.spacing(2.5)};

  display: flex;
  align-items: center;
`;
