import React from 'react';
import { Grid, Image, List } from 'semantic-ui-react';
import './Interests.css';

const GridExamplePadded = () => (
  <div
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
            <br></br> I've been an enthusiastic hobbiest kit modelling Ships and
            Motorcycles since I was a teenager - but only as an adult am I able
            to afford the higher-quality kits. I like to modify existing kits to
            improve functionality.
          </List.Item>
          <List.Item as="li" value="*">
            <strong> Mountaineering. </strong>
            <br></br>
            Me and my family have a yearly summit and climb Sniezka (One of the
            Europe's largest picks)
          </List.Item>
          <List.Item as="li" value="*">
            <strong>Bouldering.</strong> <br></br>I like problem solving aspect
            of bouldering.
          </List.Item>
        </List>
      </Grid.Column>
      <Grid.Column>
        <strong>CURRENT PROJECTS:</strong>
        <br></br>
        <List style={{ textAlign: 'left' }} as="ul">
          <List.Item as="li">
            Smart mirrow using Raspberry PI and React.
          </List.Item>
          <List.Item as="li">
            MyFace. Personal facebook. React,Typescript with GraphQl backend
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
  </div>
);

export default GridExamplePadded;
