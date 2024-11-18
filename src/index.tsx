import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Styles } from '~/components';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './redux/store';
=======
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Styles>
<<<<<<< HEAD
                <Provider store={store}>
                    <App />
                </Provider>
=======
                <App />
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
            </Styles>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
