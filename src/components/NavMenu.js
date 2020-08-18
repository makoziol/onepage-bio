import React, { useEffect } from 'react';
import { Menu } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../actions';
import DropDown from './NavBarDropDown';

const NavMenu = ({ width }) => {
  const activeItem = useSelector(state => state.setActiveTab);
  const dispatch = useDispatch();
  const interests = useSelector(state => state.setInterestsRef);
  const interestsOffsetTop = interests.current.offsetTop;
  const aboutMeOffsetTop = useSelector(
    state => state.setAboutMeRef.current.offsetTop
  );

  const contactOffsetTop = useSelector(
    state => state.setContactRef.current.offsetTop
  );
  const scrollToPosition = offset =>
    window.scrollTo({ top: offset, left: 0, behavior: 'smooth' });
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <Menu
      fixed="top"
      tabular
      inverted
      style={{
        position: '-webkit-sticky',
        height: '77px',
        background: '#282c34',
        zIndex: '1000'
      }}
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
          onClick={e =>
            dispatch(setActiveTab('Marta Koziol')) && scrollToPosition(0)
          }
        />
      </Menu.Menu>
      {width > 900 ? (
        <Menu.Menu position="right">
          <Menu.Item
            style={{ fontSize: '30px' }}
            name="About Me"
            active={activeItem === 'About Me'}
            onClick={() =>
              dispatch(setActiveTab('About Me')) &&
              scrollToPosition(aboutMeOffsetTop - 77)
            }
          />
          <Menu.Item
            style={{ fontSize: '30px' }}
            name="Interests"
            active={activeItem === 'Interests'}
            onClick={() =>
              dispatch(setActiveTab('Interests')) &&
              scrollToPosition(interestsOffsetTop - 77)
            }
          />
          <Menu.Item
            style={{ fontSize: '30px' }}
            name="Contact"
            active={activeItem === 'Contact'}
            onClick={() =>
              dispatch(setActiveTab('Contact')) &&
              scrollToPosition(contactOffsetTop - 77)
            }
          />
        </Menu.Menu>
      ) : (
        <DropDown></DropDown>
      )}
    </Menu>
  );
};
export default NavMenu;
