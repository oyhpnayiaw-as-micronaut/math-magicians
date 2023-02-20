import React from 'react';

const Quote = () => {
  const quoteStyle = {
    fontSize: '1.5em',
    display: 'grid',
    placeItems: 'center',
  };

  return (
    <p style={quoteStyle}>
      Mathematics is not about numbers, equations, computations, or algorithms:
      it is about understanding. –William Paul Thurston
    </p>
  );
};

export default Quote;
