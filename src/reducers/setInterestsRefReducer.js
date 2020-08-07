const setInterestsRefReducer = (state = { current: '' }, action) => {
  switch (action.type) {
    case 'SET_INTERESTS_REF':
      return action.payload;
    default:
      return state;
  }
};

export default setInterestsRefReducer;
