import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from "./components/main/main";
import store from "./redux/redux-store";

    ReactDOM.render(<Main  dispatch={store.dispatch.bind(store)} store={store}/>,
      document.getElementById('root'));
