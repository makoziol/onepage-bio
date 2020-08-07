const setAboutMeRefReducer = (state = { current: '' }, action) => {
  switch (action.type) {
    case 'SET_ABOUT_ME_REF':
      return action.payload;
    default:
      return state;
  }
};

export default setAboutMeRefReducer;
