import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  width: ${({ theme }) => theme.spacing(120)};
  margin-left: auto;
  margin-right: auto;

  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};

  display: flex;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.spacing(14)};

  border-style: none;

  background-color: transparent;

  padding: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(10)};
  outline: none;

  transition: ${({ theme }) => theme.animation.cubicBezier};

  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 300;
  letter-spacing: 0.03em;

  &::placeholder {
    font-weight: 200;
  }

  &:focus {
    background-color: #fff;
  }
`;

export const FormBtn = styled.button`
  padding: 0 ${({ theme }) => theme.spacing(4)};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
`;
