import React from 'react';

const Favorites = ({ favoriteItems }) => {
  return (
    <div>
      <h2>Favorite Items</h2>
      {favoriteItems.map((item, index) => (
        <div key={index}>{item.title}</div>
        // Render the favorite item details here
      ))}
    </div>
  );
};

export default Favorites;
