import React, { useRef, useEffect } from 'react';
import { Grid, List } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { setAboutMeRef } from '../actions';
import { ABOUT_ME_OVERVIEW, hilight } from '../data/data';

const AboutMe = () => {
  const { DESCRIPTION, TITLE, TECHNOLOGIES } = hilight;
  const aboutMeRef = useRef(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAboutMeRef(aboutMeRef));
  }, []);
  return (
    <div
      ref={aboutMeRef}
      style={{
        fontSize: '1.5em',
        color: '#282c34',
        background: 'white',
        padding: '50px'
      }}
    >
      <p style={{ fontSize: '2em' }}>About Me</p>

      <Grid columns={2} padded style={{ lineHeight: '1.5em' }}>
        <Grid.Column style={{ textAlign: 'left' }}>
          {ABOUT_ME_OVERVIEW &&
            ABOUT_ME_OVERVIEW.map((item, key) => <p key={key}>{item}</p>)}
        </Grid.Column>
        <Grid.Column>
          <strong>HIGHLIGHT:</strong>
          <br></br>
          <List style={{ textAlign: 'left' }} as="ul">
            <List.Item as="li" value="*">
              <strong>{TITLE}</strong>
              <br></br>
              <h3>{DESCRIPTION}</h3>
              <h4>{TECHNOLOGIES}</h4>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default AboutMe;
