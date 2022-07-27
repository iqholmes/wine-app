import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import HomeContainer from './components/Home/HomeContainer';
import Product from './components/Product';
import Nav from './components/Nav';
import Login from './components/Login';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/wine" element={<Product />} />
        </>
      </Routes>
    </BrowserRouter>
  </Provider>
);
