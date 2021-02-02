import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
/* 
if (import.meta.hot) {
  console.log('hot module replacement enabled');
  import.meta.hot.accept(({ module }) => {
    // Accept the module, apply it into your application.
  });
}
*/