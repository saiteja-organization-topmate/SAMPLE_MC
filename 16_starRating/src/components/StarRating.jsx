import { useState } from 'react';
import './StarRating.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const currentRating = hoverRating || rating;

  const ratingMessages = ['Awful', 'Poor', 'Fair', 'Good', 'Excellent'];

  const handleClick = (value) => {
    //value ranges from 1 to 5 (index + 1 i.e; 0+1 to 4+1)
    setRating(value);
  };

  const handleMouseOver = (value) => {
    //value ranges from 1 to 5 (index + 1 i.e; 0+1 to 4+1)
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    //reset to 0
    setHoverRating(0);
  };

  const getRatingMessage = (ratingValue) => {
    // returns one value from the array of ratingMessages (ex: Poor)
    return ratingMessages[Math.ceil(ratingValue) - 1];
  };

  //this function initially runs as per the length of Array.from provided (ex: 5 stars rendered)
  const renderStar = (index) => {
    //false or true for that particular star (Ex: if you are going to hover on first star then hoverRating is 1 and index is 0 to 4, in this case only for first star, fullStar returns true because of 1 > 0 that is why we see only one fullStar)
    const fullStar = (hoverRating || rating) > index;

    return (
      <span
        key={index}
        className={`star ${fullStar ? 'full' : ''} `}
        onClick={() => handleClick(index + 1)}
        onMouseOver={() => handleMouseOver(index + 1)}
        onMouseLeave={handleMouseLeave}
      >
        {fullStar ? '★' : '☆'}
      </span>
    );
  };

  return (
    <div className='container'>
      <div className='star-rating'>
        {Array.from({ length: 5 }, (_, index) => renderStar(index))}
        <span className='rating-message'>
          <strong>{getRatingMessage(currentRating)}</strong>
        </span>
      </div>
    </div>
  );
};

export default StarRating;
