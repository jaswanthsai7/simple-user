import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

export default function UserList(props) {
  return (
    <Card className={classes.card}>
      <ul>
        {props.users.map((data, i) => (
          <li key={i}>
            {data.name} ({data.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
