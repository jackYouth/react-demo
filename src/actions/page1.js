import axios from '../utils/axios';

const ACTIONS = {
  TEST: 'TEST'
};

export default ACTIONS;

const testSuccessFn = data => ({
  type: ACTIONS.TEST,
  data
});

export const testFn = params => (dispatch, getState) => {
  return axios('/testUrl', { test: 'test' }, 'POST').then(
    ({ error, result }) => {
      const { code, data } = result;
      if (code === 0) {
        dispatch(testSuccessFn(data));
      } else {
        console.log('testFn error: ', result);
      }
    }
  );
};
