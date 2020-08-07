import { combineReducers } from 'redux';
import setActiveTabReducer from './setActiveTabReducer';
import setInterestsRefReducer from './setInterestsRefReducer';
import setAboutMeRefReducer from './setAboutMeRefReducer';
import setContactRefReducer from './setContactRefReducer';
import setImageRefReducer from './setImageRefReducer';

const allReducers = combineReducers({
  setActiveTab: setActiveTabReducer,
  setInterestsRef: setInterestsRefReducer,
  setImageRef: setImageRefReducer,
  setContactRef: setContactRefReducer,
  setAboutMeRef: setAboutMeRefReducer
});

export default allReducers;
