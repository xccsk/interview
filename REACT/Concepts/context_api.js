/*Sometimes props are passed threw the hole project just to get some informations from another componenent and to aviod liting up and down a lot of components you can use context API*/

/* you will have a spear folder in the components where the  context/store states are stored in and  */ 

//here a example of a auth component 

import React from 'react'
const AuthContext = React.createContext({
    isLoggedin:false
});

export default AuthContext

// so you will always have a object thats being exported

/*When you want to have a State over the entire app you need to import it to your app.js file */


//app.js file

import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userloggedin = localStorage.getItem("isLoggedIn");

    if (userloggedin === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>

    /* that needs to wrap the entire app and you can point to functtions that is used in App.js or the imported file */
      <AuthContext.Provider value={
        {
          isLoggedin: isLoggedIn,
          onLogout: logoutHandler
        }
      }>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;


/*So now you can acces the contextAPI via a react hook in all components that are wrapped in that  */

// here is a example of the nav bar

import React,{useContext} from 'react';
import AuthContext from '../context/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedin && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedin && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedin && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

//and thats how you can target specific information to specific components in an app