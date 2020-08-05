import React, { Component } from 'react';
import { Input, Menu, Sticky } from 'semantic-ui-react';
import logo from '../logo.svg';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'Marta Koziol' };

  scrollTo = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name }) && this.scrollTo;

  render() {
    const { activeItem } = this.state;

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
              onClick={this.scrollTo}
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
              onClick={this.handleItemClick}
            />
            <Menu.Item
              style={{ fontSize: '30px' }}
              name="Interests"
              active={activeItem === 'Interests'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              style={{ fontSize: '30px' }}
              name="Contact"
              active={activeItem === 'Contact'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </Sticky>
    );
  }
}
