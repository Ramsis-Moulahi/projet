import React, { useState } from 'react';
import Books from '../composents/Books';

const Livres = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <Books books={books} onAddBook={addBook} />
    </div>
  );
};

export default Livres;


