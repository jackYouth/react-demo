import * as serviceWorker from './serviceWorker';
import Routes from './Routes';
import reducers from './reducers';
import reactReduxGenerator from './utils/react-redux-generator';

import './styles/index.scss';
import './styles/layout.scss';
import './styles/media.scss';

const defaultState = {};

reactReduxGenerator(reducers, Routes, defaultState);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
