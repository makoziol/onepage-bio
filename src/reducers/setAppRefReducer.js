const setAppRefReducer = (state = { current: '' }, action) => {
  switch (action.type) {
    case 'SET_APP_REF':
      return action.payload;
    default:
      return state;
  }
};

export default setAppRefReducer;
