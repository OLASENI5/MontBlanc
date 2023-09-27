// PlayersList.js - This component renders a list of players using the Player component

import React from "react";
import Player from "./Player"
import players from "./players";

const PlayersList = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
