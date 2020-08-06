import React, { Component } from 'react';
import { Input, Menu, Sticky } from 'semantic-ui-react';
import logo from '../logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../actions';

function MenuExampleSecondary() {
  const activeItem = useSelector(state => state.setActiveTab);
  const dispatch = useDispatch();
  return (
    <Sticky>
      <Menu
        fixed="top"
        tabular
        inverted
        pointing
        style={{ height: '77px', background: '#282c34', zIndex: '1000' }}
        secondary
      >
        <Menu.Menu position="left" fixed="top">
          <Menu.Item
            style={{
              color: 'white',
              fontSize: '30px'
            }}
            name="Marta Koziol"
            active={activeItem === 'Marta Koziol'}
            onClick={e => dispatch(setActiveTab('Marta Koziol'))}
          />
          <Menu.Item>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">
          <Menu.Item
            style={{ fontSize: '30px' }}
            name="About Me"
            active={activeItem === 'About Me'}
            onClick={() => dispatch(setActiveTab('About Me'))}
          />
          <Menu.Item
            style={{ fontSize: '30px' }}
            name="Interests"
            active={activeItem === 'Interests'}
            onClick={() => dispatch(setActiveTab('Interests'))}
          />
          <Menu.Item
            style={{ fontSize: '30px' }}
            name="Contact"
            active={activeItem === 'Contact'}
            onClick={() => dispatch(setActiveTab('Contact'))}
          />
        </Menu.Menu>
      </Menu>
    </Sticky>
  );
}
export default MenuExampleSecondary;
