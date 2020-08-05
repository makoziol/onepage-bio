import React from 'react';
import { Grid, Image, Form, Button } from 'semantic-ui-react';
import './Contact.css';

const GridExamplePadded = () => (
  <div
    style={{
      fontSize: '1.5em',
      color: '#7d7d77',
      background: 'white',
      padding: '50px'
    }}
  >
    <p style={{ fontSize: '2em' }}>Contact me</p>

    <Grid padded>
      <div style={{ textAlign: 'center', width: '100%', padding: '30px' }}>
        <form method="post">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <p>
            <button style={{ margin: '20px' }} type="submit">
              Send
            </button>
          </p>
        </form>
      </div>
    </Grid>
  </div>
);

export default GridExamplePadded;
