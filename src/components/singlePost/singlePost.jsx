import React from "react";
import { Button, Modal } from 'react-materialize';
import PostData from "./postData";

// styles
import style from './singlePost.module.scss'

export default class SinglePost extends React.Component {

  state = {
    commentText: '',
    id: null,
    isShowModal: false,
    isDisabledSaveButton: false
  };

  componentDidMount() {
    this.props.getCommentsAction(this.props.match.params.id);
  }

  closeModal = () => this.setState({isShowModal: false, commentText: '', id: null});

  addComment = post => {
    this.setState({isDisabledSaveButton: true, isShowModal: true, text: post.body, title: post.title, id: post.id});
  };

  handleChangeComment = e => {
    this.setState({ commentText: e.target.value });
    if (e.target.value) {
      this.setState({isDisabledSaveButton: false});
    } else {
      this.setState({isDisabledSaveButton: true});
    }
  };

  sendComment = () => {
    let { id, commentText } = this.state;
    const comment = {postId: id, body: commentText};
    this.props.addCommentAction(comment);
    this.closeModal();
  };

  render() {
    return (
      <div className={style.single_post}>
        {
          this.props.postData.map((post, index) => {
            return (
              <PostData key={index} post={post} index={index} addComment={this.addComment}/>
            )
          })
        }
        <Modal options={{onCloseEnd: this.closeModal}} open={this.state.isShowModal}>
          <span>Your comment: <input type='text' value={this.state.commentText} onChange={e => this.handleChangeComment(e)}/></span>
          <Button disabled={this.state.isDisabledSaveButton} onClick={() => this.sendComment()}>Add</Button>
        </Modal>
      </div>
    )
  }
}
