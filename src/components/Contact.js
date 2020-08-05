import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const GridExamplePadded = () => (
  <div style={{ fontSize: '1.5em', color: '#7d7d77', background: 'white' }}>
    <p style={{ fontSize: '2em' }}>Contact</p>

    <Grid columns={1} padded style={{ lineHeight: '1.5em' }}>
      <form method="post">
        <input
          style={{ width: '100%' }}
          type="hidden"
          name="form-name"
          value="contact"
        />

        <input type="text" name="name" placeholder="Name" />

        <input type="email" name="email" placeholder="Email" />

        <textarea name="message" placeholder="Message" />

        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Grid>
  </div>
);

export default GridExamplePadded;
