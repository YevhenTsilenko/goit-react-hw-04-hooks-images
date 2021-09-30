import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
    const [query, setQuery] = useState('')

    const onInputChange = (e) => {
        setQuery(e.currentTarget.value.toLowerCase());
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            return alert('Please enter something');
        }

        onSubmit(query);
        setQuery('');
    }

    return (
        <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={onFormSubmit}>
                <button type="submit" className={styles.SearchForm_button}>
                    <span className={styles.SearchForm_button_label}>
                        Search
                    </span>
                </button>

                <input
                    className={styles.SearchForm_input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={onInputChange}
                    name="query"
                />
            </form>
        </header>
    )
 
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
  };

export { Searchbar };