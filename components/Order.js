import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "../css/Order.css";

function Order() {
  let myOrders = [
    {
      id: "123",
      username: "Loc",
      price: '100000',
      orderDate: "10-12-2020",
      productState: "Delivered",
    },
    {
      id: "456",
      username: "Duc",
      price: '50000',
      orderDate: "10-12-2020",
      productState: "Processing",
    },
  ];

  const [orders, setOrders] = useState(myOrders);
  const renderOrder = (order, index) => {
    return (
      <tr key={index}>
        <td className = 'link' onClick = {() => window.location.pathname = `/order-detail/${order.id}`}>{order.id}</td>
        <td>{order.username}</td>
        <td>{order.price}</td>
        <td>{order.orderDate}</td>
        <td>
          <select value={order.productState}>
            <option>Delivered</option>
            <option>Processing</option>
          </select>
        </td>
      </tr>
    );
  };
  useEffect(() => {}, [orders]);

  return (
    <div className="order">
      <Table className="table-data " striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Order Date</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>{orders.map(renderOrder)}</tbody>
      </Table>
    </div>
  );
}
export default Order;
