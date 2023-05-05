import React from "react";
import Cardlist from "./cardlist";
import Searchbar from "./searchbar";
import { useState } from "react";
import Scroll from "./Scroll";
import Add from "./Add";

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
      <h1 className="body-header">ROBOFRIENDS</h1>
      <Searchbar textChanged={textChanged} />
      <Add callrobots={changeArray} />
      <Scroll>
        <Cardlist robots={robotarray} />
      </Scroll>
    </div>
  );
};

export default App;
