import styled from 'styled-components';

export const Text = styled.p`
  margin: ${({ theme }) => theme.spacing(5)} auto;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
`;
