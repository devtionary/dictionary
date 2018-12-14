import React from 'react';
import { render } from 'react-dom';
import App from './client/App.js'

import styles from './client/styles/styles.css'

render(
  <App />,
  document.getElementById('contents')
);