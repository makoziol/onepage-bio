const setActiveTabReducer = (state = 'Marta Koziol', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return action.payload;
    default:
      return state;
  }
};

export default setActiveTabReducer;
