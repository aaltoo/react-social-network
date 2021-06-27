import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";

const App = (props) => {
    return (
      <div className='app-wrapper'>
          <HeaderContainer/>
          <Navbar/>
          <div className="app-wrapper-content">
              <Route path="/dialogs"
                     render={ () => <DialogsContainer /> }/>
              <Route path="/profile/:userId?"
                     render={ () => <ProfileContainer /> }/>
              <Route path="/users"
                     render={ () => <UsersContainer /> }/>
              <Route path="/login"
                     render={ () => <LoginContainer /> }/>
              <Route path="/music" component={Music} />
              <Route path="/news" component={News} />
              <Route path="/settings" component={Settings} />
          </div>
      </div>
    );
}

export default App;
