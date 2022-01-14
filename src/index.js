import React from 'react';
import { render } from 'react-dom';
import Root from './routes';

import registerServiceWorker from './registerServiceWorker';

import './styles/global.scss';

render(<Root />, document.getElementById('root'));
registerServiceWorker();
