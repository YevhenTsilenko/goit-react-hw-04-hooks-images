import React, { useState } from 'react';
import { Searchbar } from './components/Searchbar/Searchbar';
import { Modal } from './components/Modal/Modal';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import './App.css';

export default function App () {
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [page, setPage] = useState(1);

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(1);

  };

   const openModal = (modalImg) => {
   setShowModal(true);
   setModalImg(modalImg);
  } 

  const closeModal = () => {
    setShowModal(false)
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }
         

    return (
      <div className="App">
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery query={query} page={page} onClick={openModal} loadNewPage={handleLoadMore}/>
        {showModal && <Modal modalImg={modalImg} onClose={closeModal}/>}
      </div>
    );
}
