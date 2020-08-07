import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setContactRef } from '../actions';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setContactRef(contactRef));
  }, [dispatch]);
  return (
    <div
      ref={contactRef}
      style={{
        fontSize: '1.5em',
        color: '#7d7d77',
        background: 'white',
        padding: '50px',
        minHeight: '800px'
      }}
    >
      <p style={{ fontSize: '2em' }}>Contact me</p>

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
    </div>
  );
};

export default Contact;
