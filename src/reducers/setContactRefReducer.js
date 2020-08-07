const setContactRefReducer = (state = { current: '' }, action) => {
  switch (action.type) {
    case 'SET_CONTACT_REF':
      return action.payload;
    default:
      return state;
  }
};

export default setContactRefReducer;
