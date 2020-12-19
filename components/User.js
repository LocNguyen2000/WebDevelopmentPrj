import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "../css/User.css";
import DeleteIcon from "@material-ui/icons/Delete";

let userInfos = [
  {
    userId: "1",
    name: "Nguyen Huu Loc",
    username: "nguyenHuuLoc",
    password: 'thisisit',
    phone: "0123456789",
    email: "locnguyenhuu2k@gmail.com",
    address: "Tap the PV Bao Chi",
  },
  {
    userId: "2",
    name: "Le Anh Duc",
    username: "LeAnhDuc",
    password: 'iforgotaboutit',
    phone: "0123456789",
    email: "locnguyenhuu2k@gmail.com",
    address: "Tap the PV Bao Chi",
  },
];

function User() {
  const [users, setUsers] = useState(userInfos);
  function deleteUser(e, username) {
    e.preventDefault();
    let arr = users;
    setUsers(arr.filter((user) => user.username !== username));
    console.log(arr);
  }
  useEffect(() => {}, [users]);
  const renderUser = (user, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td className = 'link' onClick = {() => window.location.pathname = `user-transactions/`}>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.password}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>{user.address}</td>
        <td>
          <div
            onClick={(e) => {
              deleteUser(e, user.username);
            }}
          >
            <DeleteIcon />
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="user">
      <Table className="table-data " striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{users.map(renderUser)}</tbody>
      </Table>
    </div>
  );
}
export default User;
