import React from 'react';
import {UserContext} from './App.js';

export default function LoginForm() {
  const username = React.useRef();
  const currentUser = React.useContext(UserContext);

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(username.current.value);
    currentUser.loginUser(username.current.value);
  };

  return (
    <div>
      {currentUser.username === null ?
        <form onSubmit={onSubmit}>
          <input type="text" ref={username} />
          <input type="submit" value="Login" />
        </form>
      :
        <button onClick={currentUser.logoutUser}>Logout</button>
      }
    </div>
  );
}

