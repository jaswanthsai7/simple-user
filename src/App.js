import "./App.css";
import User from "./components/User/User";
import UserList from "./components/User/UserList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUser = (userName, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: userName, age: age }];
    });
  };
  return (
    <div className="App">
      <User addUser={addUser} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
