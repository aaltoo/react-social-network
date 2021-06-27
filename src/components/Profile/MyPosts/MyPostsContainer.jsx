import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const MyPostsContainer = (props) => {
    return (
        <MyPosts {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = {
    addPost,
    updateNewPostText
}

export default connect(mapStateToProps, mapDispatchToProps) (MyPostsContainer)