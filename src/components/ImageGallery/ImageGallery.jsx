import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { fetchImages } from '../../services/imagesApiService';
import styles from './ImageGallery.module.css';

function ImageGallery({ query, onClick, page, loadNewPage }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  
  useEffect(() => {
      if(query) {
       getImages(query, page)
      }
  
  }, [query, page])// eslint-disable-line react-hooks/exhaustive-deps

  const getImages = (query, page) => {
    if(page === 1 && images.length === 0) {
      getRequest(query, page);
    }
    if(page === 1 && images.length !== 0) {
      setImages([])
      getRequest(query, page);
    }
    if(page > 1) {
      getRequest(query, page);
      scrollDown();
    }
  }

  const getRequest = (query, page) => {
    fetchImages(query, page)
      .then(images => {
        const imagesArray = images.hits;
        setImages(images => [...images, ...imagesArray]);
        setStatus('resolved');
      })
      .catch (error => {
        setStatus('rejected');
        setError(error);
      })
  }    

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

      if(status === 'idle') {
        return <p className={styles.text_before_search}>You can find everything you want</p>
      }

      if(status === 'pending') {
        return (
          <>
            <ul className={styles.ImageGallery}>
                <ImageGalleryItem images={images} onClick={onClick}/>
            </ul>
            <Loader />
          </>
        )
      }

      if(status === 'rejected') {
        return error;
      }

      if(status === 'resolved') {
        return (
          <>
            <ul className={styles.ImageGallery}>
              <ImageGalleryItem images={images} onClick={onClick}/>
            </ul>

            {images.length > 0 
              ? <Button onClick={loadNewPage} /> 
              : <p>Try to find something else</p>}
          </>
        )
      }
};

ImageGallery.propTypes = {
  query: PropTypes.string,
  onClick: PropTypes.func,
  loadNewPage: PropTypes.func,
  page: PropTypes.number,
};


export { ImageGallery };