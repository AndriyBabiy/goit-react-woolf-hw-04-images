import styled from 'styled-components';

export const ImageGallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  grid-gap: ${({ theme }) => theme.spacing(5)};
`;

export const GalleryPhoto = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  height: 200px;
  border-radius: ${({ theme }) => theme.spacing(1)};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;

  transition: all ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:focus {
    scale: 1.05;
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }
`;
