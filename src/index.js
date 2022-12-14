// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { App } from './components/App';
// import 'modern-normalize';
// import './styles.css';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/5-react-router/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// basename="/5-react-router/"
