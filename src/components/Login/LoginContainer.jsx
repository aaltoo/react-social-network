import Login from "./Login";
import {connect} from "react-redux";

const LoginContainer = (props) => {
    return <Login {...props}/>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {}) (LoginContainer)