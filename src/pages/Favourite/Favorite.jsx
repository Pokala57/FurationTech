import React from 'react';
import { useGlobalContext } from '../../context.';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./Favorite.css";

const Favorite = () => {
  const { favoriteItems, removeFavoriteItem } = useGlobalContext();

  const handleRemoveFavorite = (id) => {
    removeFavoriteItem(id);
  };

  return (
    <div>
      <h2>Favorite Items:</h2>
      {favoriteItems.length > 0 ? (
        <section className='booklist'>
          <div className='container'>
            <div className='booklist-content grid'>
              {favoriteItems.map((book) => (
                <div className='book-item flex flex-column flex-sb' key={book.id}>
                  <div className='book-item-img'>
                    <img src={book.cover_img} alt="cover" />
                  </div>
                  <div className='book-item-info text-center'>
                    <Link to={`/book/${book.id}`} {...book}>
                      <div className='book-item-info-item title fw-7 fs-18'>
                        <span>{book.title}</span>
                      </div>
                    </Link>

                    <div className='book-item-info-item author fs-15'>
                      <span className='text-capitalize fw-7'>Author: </span>
                      <span>{book.author.join(", ")}</span>
                    </div>

                    <div className='book-item-info-item edition-count fs-15'>
                      <span className='text-capitalize fw-7'>Total Editions: </span>
                      <span>{book.edition_count}</span>
                    </div>

                    <div className='book-item-info-item publish-year fs-15'>
                      <span className='text-capitalize fw-7'>First Publish Year: </span>
                      <span>{book.first_publish_year}</span>
                    </div>
                  </div>
                  <div className='addFav'>
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{
                        color: 'red',
                        padding: '1px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleRemoveFavorite(book.id)} // Call handleRemoveFavorite on click
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <p>No favorite items yet.</p>
      )}
    </div>
  );
};

export default Favorite;
