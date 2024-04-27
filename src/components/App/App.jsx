import { getPhotos } from 'api/getPhotos';
import { Button } from 'components/Button/Button.styled';
import { Container } from 'components/Container/Container.styled';
import {
  GalleryPhoto,
  ImageGallery,
} from 'components/ImageGallery/ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Text } from 'components/Text/Text.styled';
import { NavBar } from 'components/TopBar/TopBar.styled';
import { useEffect, useRef, useState } from 'react';

export const App = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const prevSearchRef = useRef();
  const prevPageRef = useRef();

  useEffect(() => {
    const prevSearch = prevSearchRef.current;
    const prevPage = prevPageRef.current;

    if (!search) return;

    if (prevSearch !== search || prevPage !== page) {
      setIsLoading(true);

      getPhotos(search, page)
        .then(data => {
          if (data.hits.length === 0) {
            setIsEmpty(true);
            return;
          }

          setImages(prevImages => [...prevImages, ...data.hits]);
          setShowMoreBtn(Math.ceil(data.totalHits / 12) > page);
        })
        .catch(err => {
          setIsError(err.message);
          alert(isError);
        })
        .finally(setIsLoading(false));
    }
  }, [page, search, isError]);

  const handleSearch = searchTerm => {
    if (searchTerm === search) {
      alert('We have already displayed these photos');
      return;
    }

    setSearch(searchTerm);
    setPage(1);
    setImages([]);
    setShowMoreBtn(false);
    setIsEmpty(false);
  };

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const handleEsc = evt => {
      if (modalOpen && evt.key === 'Escape') setModalOpen(false);
    };

    document.addEventListener('keydown', handleEsc);

    return () => document.removeEventListener('keydown', handleEsc);
  }, [modalOpen]);

  const backdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const showModal = (image, alt) => {
    setModalOpen(true);
    setModalImage(image);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <NavBar>
        <SearchBar handleSearch={handleSearch} />
      </NavBar>
      {isEmpty && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}
      {isError && (
        <Text textAlign="center">
          Something went wrong, try again later... 😥
        </Text>
      )}
      <ImageGallery>
        {images.map(image => (
          <GalleryPhoto
            key={image.id}
            onClick={() => showModal(image.largeImageURL, image.tags)}
          >
            <img src={image.webformatURL} alt={image.tags} />
          </GalleryPhoto>
        ))}
      </ImageGallery>
      {modalOpen && (
        <Modal img={modalImage} alt={modalAlt} closeModal={backdropClick} />
      )}
      {isLoading && <Loader />}
      {showMoreBtn && <Button onClick={handleClick}>Load more</Button>}
    </Container>
  );
};
