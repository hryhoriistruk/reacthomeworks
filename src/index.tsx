import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Router } from "react-router-dom";
import { router } from "./router/router";
import { PostsCommentsProvider } from "./PostsCommentsProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <PostsCommentsProvider>
      <App />
    </PostsCommentsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(
    <Router router={router}>
      <App />
    </Router>
);

reportWebVitals();