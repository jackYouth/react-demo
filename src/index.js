// 兼容ie9-11
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';

import * as serviceWorker from './serviceWorker';
import Routes from './Routes';
import './index.scss';
import reducers from './reducers';
import reactReduxGenerator from './utils/react-redux-generator';

const defaultState = {};

reactReduxGenerator(reducers, Routes, defaultState);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
console.log('test smart git');
