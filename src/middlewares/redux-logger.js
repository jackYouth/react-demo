export default function reduxLogger(store) {
  return next => action => {
    if (!window.console || !window.reduxLogger) {
      return next(action);
    }
    if (console.group) {
      console.group(action.type);
    } else {
      console.log('---------- ' + action.type + ' -------------');
    }
    console.log('[logger] dispatch', action);
    let result = next(action);
    console.log('[logger] next state', store.getState());
    if (console && console.group) {
      console.groupEnd(action.type);
    } else {
      console.log('---------- ' + action.type + ' -------------');
    }
    return result;
  };
}
