import React from "react";
import { robot_list } from "./robots.js";
import { useState } from "react";

const Add = ({ callrobots }) => {
  const [robot_list_new, change] = useState(robot_list);
  const [name_val, name_changed] = useState("");
  const [email_val, email_changed] = useState("");
  const [i, change_i] = useState(1);

  const change_name = (event) => {
    name_changed(event.target.value);
  };

  const change_email = (event) => {
    email_changed(event.target.value);
  };

  const add_robots = () => {
    if (name_val == "" || email_val == "") {
      return;
    }
    const new_robot = {
      id: i,
      name: name_val,
      email: email_val,
    };
    change([...robot_list_new, new_robot]);
    name_changed("");
    email_changed("");
    change_i(i * 2);
    callrobots(robot_list_new);
    console.log(i);
  };
  return (
    <div>
      <h3>Name</h3>
      <input value={name_val} onChange={change_name} />
      <h3>Email</h3>
      <input value={email_val} onChange={change_email} />
      <button onClick={add_robots}>Add</button>
    </div>
  );
};

export default Add;
