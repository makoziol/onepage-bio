import React, { useRef, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
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
        padding: `${width > 900 ? '50px' : '10px'}`,
        lineHeight: '1.4em'
      }}
    >
      <p style={{ fontSize: '2em' }}>Interests</p>

      <Grid columns={width > 900 ? 2 : 1} padded>
        <Grid.Column>
          <strong>PERSONAL INTERESTS:</strong>
          <br></br>
          <br></br>
          <div style={{ textAlign: 'left', lineHeight: '1.4em' }} as="ul">
            {interests &&
              interests.map((interest, key) => (
                <p key={key} as="li" value="*">
                  <strong style={{ color: '#282d34', fontWeight: 'bold' }}>
                    {interest.TITLE}
                  </strong>
                  <br></br>
                  {interest.DESCRIPTION}
                </p>
              ))}
          </div>
        </Grid.Column>
        <Grid.Column>
          {projects &&
            projects.map((project, key) => (
              <div key={key}>
                <strong>{project.SECTION_TITLE}:</strong>
                <br></br>
                <br></br>
                <div style={{ textAlign: 'left' }} as="ul">
                  <strong
                    style={{
                      color: '#282d34',
                      fontWeight: '600',
                      textAlign: 'left'
                    }}
                  >
                    {project.TITLE}
                  </strong>

                  <p style={{ marginBottom: '0' }} as="li">
                    {project.DETAILS}
                  </p>
                  <a
                    style={{
                      color: '#aaaace',
                      textDecoration: 'none',
                      textAlign: 'center'
                    }}
                    href="https://martakoziol-interests.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.LINK_TEXT}
                  </a>
                </div>
                <br></br>
              </div>
            ))}
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default Interests;
