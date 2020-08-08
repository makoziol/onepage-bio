import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { setActiveTab } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { scrollToPosition } from '../utils/helpers';
import './NavBarDropDown.css';

const options = [
  { key: 0, text: '', value: '' },
  { key: 1, text: 'About Me', value: 'About Me' },
  { key: 2, text: 'Interests', value: 'Interests' },
  { key: 3, text: 'Contact', value: 'Contact' }
];

const DropdownExampleClearable = () => {
  const aboutMeOffsetTop = useSelector(
    state => state.setAboutMeRef.current.offsetTop
  );
  const interestsOffsetTop = useSelector(
    state => state.setInterestsRef.current.offsetTop
  );
  const contactOffsetTop = useSelector(
    state => state.setContactRef.current.offsetTop
  );
  const dispatch = useDispatch();
  const getScrollValue = tabName => {
    switch (tabName) {
      case 'About Me':
        return aboutMeOffsetTop - 77;
      case 'Interests':
        return interestsOffsetTop - 77;
      case 'Contact':
        return contactOffsetTop - 77;
      default:
        return 0;
    }
  };

  return (
    <Dropdown
      fluid
      selectOnBlur={false}
      value=""
      style={{
        width: '50%',
        textAlign: 'right',
        color: 'white',
        fontSize: '20px',
        marginTop: '30px',
        marginRight: '30px'
      }}
      icon="ellipsis horizontal"
      onChange={(e, data) =>
        dispatch(setActiveTab(data.value)) &&
        scrollToPosition(getScrollValue(data.value))
      }
      options={options}
    ></Dropdown>
  );
};

export default DropdownExampleClearable;
