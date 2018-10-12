import axios from '../utils/axios';

export default function(store) {
  return next => action => {
    if (!action.url || !Array.isArray(action.types)) {
      return next(action);
    }
    const [LOADING, SUCCESS, ERROR] = action.types;
    next({
      type: LOADING,
      loading: true,
      ...action
    });
    axios(action.url, action.params)
      .then(result =>
        next({
          type: SUCCESS,
          loading: false,
          payload: result
        })
      )
      .catch(err => {
        next({
          type: ERROR,
          loading: false,
          error: err
        });
      });
  };
}
