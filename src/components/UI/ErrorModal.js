import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

export default function ErrorModal(props) {
  return (
    <div>
      <div className={classes.backdrop}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.action}></footer>
          <Button onClick={props.errorHandler}>Okay</Button>
        </Card>
      </div>
    </div>
  );
}
