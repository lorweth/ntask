import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import getStore from 'app/store';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import 'index.css';
import ToastContainer from 'common/toastify';

const store = getStore();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ChakraProvider>
        <App />
        <ToastContainer />
      </ChakraProvider>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
