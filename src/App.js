// This is the main component of the application, App.js.
// It imports several components and renders them inside a Bootstrap Card.
// The card displays product information and a greeting message.
// Author: [Your Name]
// Date: [Current Date]
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const firstName = "Olaseni";

function App() {
  return (
    <Container>
      <Card style={{ width: "18rem", margin: "auto", marginTop: "2rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <p>Hello, {firstName ? firstName : "there"}!</p>
      </div>
    </Container>
  );
}

export default App;
