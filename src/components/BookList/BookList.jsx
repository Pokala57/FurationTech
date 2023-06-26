import React from 'react';
import { useGlobalContext } from '../../context.';
import Book from '../BookList/Book';
import Loading from '../Loader/Loader';
import coverImg from '../../images/cover_not_found.jpg';
// import Favorites from '../fav/fav';
import './BookList.css';

const BookList = () => {
  const { books, loading, resultTitle, addFavoriteItem, removeFavoriteItem, favoriteItems } = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace('/works/', ''),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
    };
  });

  const handleAddToFavorites = (book) => {
    if (favoriteItems.find((item) => item.id === book.id)) {
      removeFavoriteItem(book.id);
    } else {
      addFavoriteItem(book);
    }
  };

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return (
              <Book
                key={index}
                book={item}
                isFavorite={favoriteItems.find((favItem) => favItem.id === item.id)}
                handleAddToFavorites={handleAddToFavorites}
              />
            );
          })}
        </div>
      </div>
      {/* <Favorites favoriteItems={favoriteItems} /> */}
    </section>
  );
};

export default BookList;
