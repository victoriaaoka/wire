import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './routes/routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('app') as HTMLElement
);
registerServiceWorker();