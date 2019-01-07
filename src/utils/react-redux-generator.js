import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeGenerator from './store-generator';

export default function reactReduxGenerator(
  reducers,
  Routes,
  defaultState,
  element
) {
  const store = storeGenerator(reducers, defaultState);
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>,
    element || document.getElementById('root')
  );
}
