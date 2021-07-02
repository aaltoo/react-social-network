import React, {useEffect} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Loader/Preloader";
import store from "./redux/redux-store";

const App = (props) => {
    useEffect(props.initializeApp, [])

    if (!props.initialized) return <Preloader />

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
                             render={ () => <Login /> }/>
                      <Route path="/music" component={Music} />
                      <Route path="/news" component={News} />
                      <Route path="/settings" component={Settings} />
                  </div>
                </div>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App)
