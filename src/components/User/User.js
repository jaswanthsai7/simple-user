import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./User.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function User(props) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUser = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim() === 0) {
      setError({
        title: "Invalid Details",
        message: "Please enter a valid username and age",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( > 0)",
      });
      return;
    }
    props.addUser(userName, age);
    console.log(userName);
    console.log(age);
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler=()=>{
    setError('')
  }

  return (
    <div>
      {error && (
        <ErrorModal title={error.title} message={error.message} errorHandler={errorHandler}></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUser}>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => {
              userNameHandler(e);
            }}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => {
              ageHandler(e);
            }}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
