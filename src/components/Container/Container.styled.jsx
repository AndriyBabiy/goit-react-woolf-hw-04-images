import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.spacing(300)};
  padding: 0 ${({ theme }) => theme.spacing(5)};

  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
