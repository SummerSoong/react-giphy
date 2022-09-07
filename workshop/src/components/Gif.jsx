import React from 'react';

const Gif = () => {
  const (gifId) = props;
  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`
  return (
    <img className='gif' src={url} alt="gif" />
  );
};

export default Gif;
