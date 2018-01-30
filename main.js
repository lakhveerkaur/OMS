import React from 'react';
import ReactDOM from 'react-dom';
// import LoginPage from './client/views/productInfo.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';
import Home from './client/components/home.jsx';
import PurchaseOrderView from './client/components/productOrderViewPage.jsx';
import BookingOrder from './client/components/bookingOrder.jsx';
import Inventory from './client/components/inventoryView.jsx';
ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/poView' component={PurchaseOrderView} />
      <Route exact path='/boView' component={BookingOrder} />
      <Route exact path='/inventory' component={Inventory} />
    </div>
  </HashRouter>,
  document.getElementById('app')
);
