import React, { useState } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);

 
  const addBook = () => {
    const id = books.length + 1;
    const title = prompt('Entrez le titre du livre :');
    // Vérifier si l'utilisateur a annulé la saisie du titre
  if (title === null) {
    // L'utilisateur a annulé, donc ne rien faire
    return;
  }
    const description = prompt('Entrez la description du livre :');
    const image = prompt('Entrez le chemin vers image du livre :');
  
    const newBook = {
      id,
      title,
      description,
      image,
    };
  
    // Ajouter le nouveau livre à la liste des livres existants
    setBooks([...books, newBook]);
  };
  
  

  const removeBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  const removeAllBooks = () => {
    setBooks([]); // Efface tous les livres en définissant un tableau vide
  };
  
  
  
 return (
    <div>
      <h2>Liste des livres</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      
      <button className="remove-all-book-button" onClick={removeAllBooks}>Supprimer tous les livres</button>
      <button className="add-book-button" onClick={addBook}>Ajouter livre</button>
    </div>
      <table>
        <tr><td></td></tr>
        <tr><td></td></tr>
        <tr><td></td></tr>
        <tr><td></td></tr>
        
      </table>
      <center><table style={{ borderCollapse: 'collapse', width: '90%' }}>
        <thead>
           
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Titre</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Image</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{book.id}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{book.title}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{book.description}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <img src={book.image} alt="Page de garde" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <button onClick={() => removeBook(book.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table></center>
      
    </div>
  );
  
  
};

export default Books;
