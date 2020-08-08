import React, { useRef, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { setAboutMeRef } from '../actions';
import { ABOUT_ME_OVERVIEW, hilight } from '../data/data';

const AboutMe = ({ width }) => {
  const { DESCRIPTION, TITLE, TECHNOLOGIES } = hilight;
  const aboutMeRef = useRef(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAboutMeRef(aboutMeRef));
  }, [dispatch]);
  return (
    <div
      ref={aboutMeRef}
      style={{
        fontSize: '1.5em',
        color: '#282c34',
        background: 'white',
        padding: `${width > 900 ? '50px' : '10px'}`
      }}
    >
      <p style={{ fontSize: '2em' }}>About Me</p>

      <Grid
        columns={width > 900 ? 2 : 1}
        padded
        style={{ lineHeight: '1.5em' }}
      >
        <Grid.Column style={{ textAlign: 'left' }}>
          {ABOUT_ME_OVERVIEW &&
            ABOUT_ME_OVERVIEW.map((item, key) => <p key={key}>{item}</p>)}
        </Grid.Column>
        <Grid.Column>
          <strong>HIGHLIGHT:</strong>
          <br></br>
          <br></br>
          <p style={{ textAlign: 'left' }}>
            <strong>{TITLE}</strong>
            <br></br>
            {DESCRIPTION}
            <br></br>
            {TECHNOLOGIES}
          </p>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default AboutMe;
