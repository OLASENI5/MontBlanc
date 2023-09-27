// Player.js - This component renders player information

import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default props for the Player component
Player.defaultProps = {
  name: "Lionel Messi",
  team: "Inter Miami CF",
  nationality: "Argentinian",
  jerseyNumber: "10",
  age: "36",
  imageUrl: "https://cdn.vox-cdn.com/thumbor/6nIVtPyYcl1coLLjjNEfox5FqIU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24861793/usa_today_21237309.jpg",
};

export default Player;
