import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

function Modal({ modalImg, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () =>{
      window.removeEventListener('keydown', handleKeyDown);
    } 
  })

  const handleKeyDown = (e) => {
    if(e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if(e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
      <div className={styles.Overlay} onClick={handleOverlayClick}>
          <div className={styles.Modal}>
              <img src={modalImg.largeImageURL} alt={modalImg.tags} />
          </div>
      </div>
  )
}

Modal.propTypes = {
  modalImg: PropTypes.object,
  onClose: PropTypes.func,
};

export { Modal };