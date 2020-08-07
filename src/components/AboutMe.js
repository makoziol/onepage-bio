import React, { useRef, useEffect } from 'react';
import { Grid, List } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { setAboutMeRef } from '../actions';

const GridExamplePadded = () => {
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
          <p>
            I have over 2 years of experience as a software engineer, and have
            worked at small startups.
          </p>
          <p>
            While I'm a proficient full-stack developer, my expertise is in
            building front-end in React.
          </p>
          <p>
            I'm most attracted to solving real customer problems with a business
            justification.
          </p>
          <p>
            I'm looking to join a medium or large organisation to work on a
            larger number of projects.
          </p>
        </Grid.Column>
        <Grid.Column>
          <strong>HIGHLIGHT:</strong>
          <br></br>
          <List style={{ textAlign: 'left' }} as="ul">
            <List.Item as="li" value="*">
              <strong>Escape Room Raspberry PI project.</strong>
              <br></br>
              <h3>
                Suffisticated lighting and sound controls as well as pre
                programed sequences.
                <br></br>
                Technologies used: Python (Backend), React.js (Front End),
                Yeelight
              </h3>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default GridExamplePadded;
