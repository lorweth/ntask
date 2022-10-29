import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import ToastContainer from 'common/toastify';
import loadIcon from 'app/icon-loader';
import getStore from 'app/store';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import 'index.css';
import { BrowserRouter } from 'react-router-dom';

loadIcon();

const store = getStore();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StoreProvider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ToastContainer />
    </ChakraProvider>
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
