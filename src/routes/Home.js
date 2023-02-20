import React from 'react';

const Home = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '4rem 0',
    }}
  >
    <h2 style={{ marginBottom: '2rem' }}>Welcome to our page</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
      Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse
      urna nibh, viverra non, semper suscipit, posuere a, pede.
    </p>
    <p>
      Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris
      sit amet orci. Aenean dignissim pellentesque felis.
    </p>
    <p>
      Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in,
      pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
    </p>
  </div>
);

export default Home;
