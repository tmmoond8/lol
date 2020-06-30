import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products">
          <ProductPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/">
          <ProductPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
