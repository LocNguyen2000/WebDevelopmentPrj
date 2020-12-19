import React from "react";
import Sidebar from "./Sidebar";
import Product from "./Product";
import SearchBar from "./SearchBar";
import Order from "./Order";
import OrderDetail from "./OrderDetail";
import User from "./User";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import UserHistory from "./UserHistory";

import "../css/Admin.css";
import { Route, Switch } from "react-router-dom";

function AdminPage() {
  return (
    <div className="admin">
      <Sidebar></Sidebar>
      <div>
        <SearchBar></SearchBar>
        <div className="header">
          <Route path="/">
            Home
            <Route path="/products"> {<NavigateNextIcon />} Products</Route>
            <Route path="/orders"> {<NavigateNextIcon />} Orders</Route>
            <Route path="/users"> {<NavigateNextIcon />} Users</Route>
            <Route path="/order-detail/:orderId">
              {<NavigateNextIcon />} Orders {<NavigateNextIcon />} Detail
            </Route>
            <Route path="/user-transactions">{<NavigateNextIcon />} Users {<NavigateNextIcon />} Transactions</Route>

          </Route>
        </div>
        <div>
          <Switch>
            <Route path="/products" component={Product}></Route>
            <Route path="/orders" component={Order}></Route>
            <Route
              path="/order-detail/:orderId"
              name="detail"
              component={OrderDetail}
            ></Route>
            <Route path="/users" component={User}></Route>
            <Route path="/user-transactions" component={UserHistory}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
export default AdminPage;
