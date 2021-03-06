import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/app';

const wrapper = document.getElementById('app');
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  wrapper
);
