import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Alert, Container } from "react-bootstrap";

const Menu = () => (
  <Container>
    {dishes && dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />)}
    {dishes.length === 0 && (
      <Alert variant="warning">work in progress.....</Alert>
    )}
  </Container>
);
export default Menu;
