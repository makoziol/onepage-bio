import React, { useRef, useEffect, useState } from 'react';
import { Grid, List } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { setInterestsRef } from '../actions';
import { interests, projects } from '../data/data';
import './Interests.css';

const Interests = () => {
  const interestsRef = useRef(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInterestsRef(interestsRef));
  }, []);
  return (
    <div
      ref={interestsRef}
      style={{
        fontSize: '1.5em',
        color: 'white',
        background: '#7d7d77',
        padding: '50px'
      }}
    >
      <p style={{ fontSize: '2em' }}>Interests</p>

      <Grid columns={2} padded style={{ lineHeight: '1.5em' }}>
        <Grid.Column>
          <strong>PERSONAL INTERESTS:</strong>
          <br></br>

          <List style={{ textAlign: 'left' }} as="ul">
            {interests &&
              interests.map((interest, key) => (
                <List.Item as="li" value="*">
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
