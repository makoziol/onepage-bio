const setImageRefReducer = (state = { current: '' }, action) => {
  switch (action.type) {
    case 'SET_IMAGE_REF':
      return action.payload;
    default:
      return state;
  }
};

export default setImageRefReducer;
