import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes/routes';

// styles
import './index.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('app') as HTMLElement,
);
registerServiceWorker();
