import React from 'react';
import { Image, Divider } from 'semantic-ui-react';

const Image = () => (
  <div style={{ paddingTop: '100px' }}>
    <Image
      src={require('../images/photo.jpeg')}
      size="medium"
      circular
      centered
      style={{ marginBottom: '10px' }}
    />
    <p
      style={{
        color: 'white ',
        fontSize: '3em'
      }}
    >
      Marta Koziol
    </p>

    <Divider
      style={{ borderTop: `3px solid grey`, width: '30%', margin: '0 auto' }}
    />

    <p
      style={{
        color: 'white ',
        fontSize: '2em',
        marginTop: '30px',
        marginBottom: '40px'
      }}
    >
      Software Engineer , Leeds , United Kingdom
    </p>
  </div>
);

export default Image;
