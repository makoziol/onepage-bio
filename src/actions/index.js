export const setActiveTab = ref => {
  return {
    type: 'SET_ACTIVE_TAB',
    payload: ref
  };
};

export const setInterestsRef = ref => {
  return {
    type: 'SET_INTERESTS_REF',
    payload: ref
  };
};

export const setAboutMeRef = ref => {
  return {
    type: 'SET_ABOUT_ME_REF',
    payload: ref
  };
};

export const setContactRef = ref => {
  return {
    type: 'SET_CONTACT_REF',
    payload: ref
  };
};
