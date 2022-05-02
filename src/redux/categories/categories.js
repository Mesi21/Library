const CHECK_STATUS = './library/categories/CHECK_STATUS';

const stateInit = [];

export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

const catReducer = (state = stateInit, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default catReducer;
