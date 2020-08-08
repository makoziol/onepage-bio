import React, { useRef, useEffect } from 'react';
import { Grid, List } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { setInterestsRef } from '../actions';
import { interests, projects } from '../data/data';
import './Interests.css';

const Interests = ({ width }) => {
  const interestsRef = useRef(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInterestsRef(interestsRef));
  }, [dispatch]);
  return (
    <div
      ref={interestsRef}
      style={{
        fontSize: '1.5em',
        color: 'white',
        background: '#7d7d77',
        padding: `${width > 900 ? '50px' : '10px'}`
      }}
    >
      <p style={{ fontSize: '2em' }}>Interests</p>

      <Grid
        columns={width > 900 ? 2 : 1}
        padded
        style={{ lineHeight: '1.5em' }}
      >
        <Grid.Column>
          <strong>PERSONAL INTERESTS:</strong>
          <br></br>
          <List style={{ textAlign: 'left' }} as="ul">
            {interests &&
              interests.map((interest, key) => (
                <List.Item key={key} as="li" value="*">
                  <strong>{interest.TITLE}</strong>
                  <br></br>
                  {interest.DESCRIPTION}
                </List.Item>
              ))}
          </List>
        </Grid.Column>
        <Grid.Column>
          {projects &&
            projects.map((project, key) => (
              <div key={key}>
                <strong>{project.TITLE}:</strong>
                <br></br>
                <List style={{ textAlign: 'left' }} as="ul">
                  <List.Item as="li">{project.DETAILS}</List.Item>
                </List>
                <br></br>
              </div>
            ))}
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default Interests;
