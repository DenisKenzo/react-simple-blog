import {connect} from 'react-redux';
import SinglePost from "./singlePost";
import {addCommentActionCreator, getCommentsActionCreator} from "../../redux/specific-post-reducer";

// services
import {getCommentsRequest} from "../../services/getComments";
import {addCommentRequest} from "../../services/addComment";

let mapStateToProps = state => {
  return {
    postData: state.singleReducer.postData,
    comments: state.singleReducer.comments
  }
};

let mapDispatchToProps = dispatch => {
  return {
    getCommentsAction: id => getCommentsRequest(id).then(response => dispatch(getCommentsActionCreator(response.data))),
    addCommentAction: comment => addCommentRequest(comment).then(response => dispatch(addCommentActionCreator(response.data)))
  }
};

const SinglePostContainer = connect(mapStateToProps, mapDispatchToProps)(SinglePost);

export default SinglePostContainer;
