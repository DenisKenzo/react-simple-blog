import {connect} from 'react-redux';
import Posts from "./posts";
import {
  addPostActionCreator,
  deletePostActionCreator,
  getPostsListActionCreator,
  isAddPostActionCreator,
  updatePostActionCreator
} from "../../redux/posts-reducer";

// services
import {getPostsRequest} from "../../services/getPosts";
import {addPostRequest} from "../../services/addPost";
import {deleteRequest} from "../../services/deletePost";
import {replacePost} from "../../services/replacePost";

let mapStateToProps = state => {
  return {
    postList: state.postsReducer.postList,
    isAddingPost: state.postsReducer.isAddingPost,
    currentPost: state.postsReducer.currentPost
  }
};

let mapDispatchToProps = dispatch => {
  return {
    getPostsAction: () => getPostsRequest().then(response => dispatch(getPostsListActionCreator(response))),
    isAddPostAction: boolean => dispatch(isAddPostActionCreator(boolean)),
    addPostAction: post => addPostRequest(post).then(response => dispatch(addPostActionCreator(response.data))),
    deletePostAction: id => deleteRequest(id).then(dispatch(deletePostActionCreator(id))),
    updatePostAction: (updatedPost, id) => replacePost(updatedPost, id).then(response => dispatch(updatePostActionCreator(response, id))),
  }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
