import ACTIONS from '../actions/page1';

const testFn = (state, action) => {
  const { testData } = action;
  return { ...state, testData };
};

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TEST:
      return testFn(state, action);
    default:
      return state;
  }
}
