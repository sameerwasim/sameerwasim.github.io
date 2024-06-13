import React from 'react';

const Image = ({ imgUrl }) => (
  <div className='flex justify-center'>
    <img src={imgUrl} alt={imgUrl} />
  </div>
);

export default Image;
