import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import "../css/AddProductForm.css";

function AddProductForm() {
  const [open, setOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    sizes: [],
    discount: "",
    image1: "",
    image2: "",
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newProduct);
    
  };
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setNewProduct({ ...newProduct, [name]: value });
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add Product
      </Button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className="myModal">
          <h2>Add New Product</h2>
          <p className="header">Product Details</p>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              name="price"
              placeholder="Price"
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              name="category"
              placeholder="Category"
              onChange={handleInputChange}
            ></input>

            <input
              type="text"
              name="discount"
              placeholder="Discount"
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              name="image1"
              placeholder="Image 1"
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              name="image2"
              placeholder="Image 2"
              onChange={handleInputChange}
            ></input>
            <button type="submit">SAVE</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
export default AddProductForm;
