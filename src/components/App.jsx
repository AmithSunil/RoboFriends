import React from "react";
import Cardlist from "./cardlist";
import Searchbar from "./searchbar";
import { useState } from "react";

const App = ({ robots }) => {
  const [robotarray, changeArray] = useState(robots);

  const textChanged = (event) => {
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    changeArray(filteredRobots);
  };
  

  return (
    <div>
      <h1>ROBOFRIENDS</h1>
      <Searchbar textChanged={textChanged} />
      <Cardlist robots={robotarray} />
    </div>
  );
};

export default App;
