import React from "react";
import { Form, FormControl,Button } from "react-bootstrap";
import '../css/Search.css'

function SearchBar() {
  return (
    <div className = 'search'>
      <Form className = 'form-search' inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
}
export default SearchBar;
