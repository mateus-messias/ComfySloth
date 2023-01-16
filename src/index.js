import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
//dev-zw7nx4tkzaqzcqzo.us.auth0.com
//cCjkrdJGjaR2K6kh7k92r3evsjU1kBHr
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
  domain="dev-zw7nx4tkzaqzcqzo.us.auth0.com"
  clientId="cCjkrdJGjaR2K6kh7k92r3evsjU1kBHr"
  redirectUri={window.location.origin}
  cacheLocation='localstorage'
>
  <UserProvider>        
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </UserProvider>
</Auth0Provider>
);
