import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "../css/Product.css";
import StarIcon from "@material-ui/icons/Star";
import StarOutline from "@material-ui/icons/StarOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import AddProductForm from './AddProductForm'

let myProducts = [
  {
    name: "T-shirt 1",
    category: "Shirt",
    price: "100000",
    rating: [1, 2, 4],
    size: "L",
    discount: "0%",
    image: require("../image/T-shirt.jpg"),
  },
  {
    name: "T-Shirt 2",
    category: "Shirt",
    price: "100000",
    rating: [2, 3, 1, 5],
    size: "XL",
    discount: "0%",
    image: require("../image/T-shirt.jpg"),
  },
  {
    name: "T-Shirt 3",
    category: "T-Shirt",
    price: "100000",
    rating: [3, 2],
    size: "M",
    discount: "50%",
    image: require("../image/T-shirt.jpg"),
  },
];

function Product() {
  const [products, setProducts] = useState(myProducts);

  function starRating(rating) {
    let stars = Math.max(...rating);
    let arr = [];
    for (let i = 0; i < stars; i++) arr.push(<StarIcon />);
    for (let i = 0; i < 5 - stars; i++) arr.push(<StarOutline />);
    return arr;
  }
  function deleteProduct(e, productName) {
    e.preventDefault();
    let arr = products;
    setProducts(arr.filter((product) => product.name !== productName));
    console.log(arr);
  }

  useEffect(() => {}, [products]);

  const renderProduct = (product, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>{starRating(product.rating)}</td>
        <td>{product.size}</td>
        <td>
          <select>
            <option value = '0%'>0%</option>
            <option value = '50%'>50%</option>
          </select>
        </td>
        <td>
          <img src={product.image} alt="" width="130px" height="130px"></img>
        </td>
        <td>
          <div
            onClick={(e) => {
              deleteProduct(e, product.name);
            }}
          >
            <DeleteIcon></DeleteIcon>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="product">
      <div className="post-product">
        <AddProductForm></AddProductForm>
      </div>
      <Table className="table-data " striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Size</th>
            <th>Discount (%)</th>
            <th>Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{products.map(renderProduct)}</tbody>
      </Table>
    </div>
  );
}
export default Product;
