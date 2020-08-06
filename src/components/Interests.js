import React, { useRef, useEffect, useState } from 'react';
import { Grid, Image, List } from 'semantic-ui-react';
import './Interests.css';

const GridExamplePadded = () => {
  const interestsRef = useRef(null);
  const [intrestsStateRef, setRef] = useState({});

  useEffect(() => {
    setRef(interestsRef);
  }, []);
  console.log({ intrestsStateRef });
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
            <List.Item as="li" value="*">
              <strong>Miniatures.</strong>
              <br></br> I've been an enthusiastic hobbiest of miniature
              modellels since I was a teenager - but only as an adult I am able
              to afford the higher-quality kits. I like to modify existing kits
              to improve functionality.
            </List.Item>
            <List.Item as="li" value="*">
              <strong> Mountaineering. </strong>
              <br></br>
              Me and my family have a yearly summit and climb Sniezka (One of
              Poland's largest peaks)
            </List.Item>
            <List.Item as="li" value="*">
              <strong>Bouldering.</strong> <br></br>I like problem solving
              aspect of bouldering, but it is fair to say i am a novice.
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column>
          <strong>CURRENT PROJECTS:</strong>
          <br></br>
          <List style={{ textAlign: 'left' }} as="ul">
            <List.Item as="li">
              Page dedicated to my hobbies, completed and current projects.
            </List.Item>
          </List>
          <strong>FUTURE PROJECTS:</strong>
          <br></br>
          <List style={{ textAlign: 'left' }} as="ul">
            <List.Item as="li">
              Smart mirrow using Raspberry PI and React. I have seen few
              projects been done in python but am interested to try to code it
              in React.
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default GridExamplePadded;
