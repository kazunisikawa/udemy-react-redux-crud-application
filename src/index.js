import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
 // 作成したStoreを全コンポートネントに渡すための機能を持つのが、プロバイダー
import {Provider} from 'react-redux';
import './index.css';
import reducer from './reducers/';
// componentに関しても専用のディレクトリを作成しておくと、ソースの見通しが良くなる
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
