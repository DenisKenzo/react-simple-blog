import React from "react";
import { Button, Modal } from 'react-materialize';
import PostsList from "./postsList";

// styles
import style from './posts.module.scss'

export default class Posts extends React.Component {

  state = {
    text: '',
    title: '',
    showDelModal: false,
    id: null,
    isEditPost: false,
    isAddPost: false,
    disabledAddButton: false
  };

  componentDidMount() {
    this.props.getPostsAction();
  }

  close = () => {
    this.setState({title: '', text: '', isAddPost: false})
  };

  handleChangeTitle = e => {
    this.setState({ title: e.target.value });
    if (e.target.value) {
      this.setState({disabledAddButton: false})
    } else {
      this.setState({disabledAddButton: true})
    }
  };

  handleChangeText = e => this.setState({ text: e.target.value });

  addPost = () => {
    let { text, title } = this.state;
    const post = {title: title, body: text};
    this.props.addPostAction(post);
    this.close();
  };

  deletePost = id => this.setState({showDelModal: true, id});

  confirmDelete = () => {
    this.props.deletePostAction(this.state.id);
    this.closeDelModal();
  };

  closeDelModal = () => this.setState({showDelModal: false, id: null});

  closeEditModal = () => this.setState({showEditModal: false, isEditPost: false, text: '', title: '', id: null});

  replacePost = replacePost => {
    this.setState({isEditPost: true, text: replacePost.body || '', title: replacePost.title || '', id: replacePost.id})
  };

  confirmReplace = () => {
    let { text, title, id} = this.state;
    const updatedPost = {body: text, title: title};
    this.props.updatePostAction(updatedPost, id);
    this.closeEditModal();
  };

  openAddPostModal = () => {
    this.setState({isAddPost: true, disabledAddButton: true})
  };

  render() {
    let { postList } = this.props;
    return (
      <div>
        <div className={style.head}>
          <Button onClick={() => this.openAddPostModal()}>Add post</Button>
          <span className={style.head_text}>Latest Posts:</span>
        </div>
        <div>
          {
            postList.length > 0 ? postList.map((post, index) => {
              return (
                <PostsList key={index} post={post} index={index} deletePost={this.deletePost} replacePost={this.replacePost}/>
              )
            }) : 'Nothing here'
          }
        </div>
        <Modal options={{onCloseEnd: this.closeEditModal}} open={this.state.isEditPost}>
          <span>Title: <input type='text' value={this.state.title} onChange={e => this.handleChangeTitle(e)}/></span>
          <span>Text: <input type='text' value={this.state.text} onChange={e => this.handleChangeText(e)}/></span>
          <Button onClick={() => this.confirmReplace()}>Save</Button>
        </Modal>
        <Modal options={{onCloseEnd: this.closeDelModal}} open={this.state.showDelModal}>
          <p>Are you sure to delete this post?</p>
          <Button onClick={() => this.confirmDelete()}>Confirm delete</Button>
        </Modal>
        <Modal options={{onCloseEnd: this.close}} open={this.state.isAddPost}>
          <div>Enter title: <input type='text' value={this.state.title} onChange={e => this.handleChangeTitle(e)}/></div>
          <div>Enter text: <input type='text' value={this.state.text} onChange={e => this.handleChangeText(e)}/></div>
          <Button disabled={this.state.disabledAddButton} onClick={this.addPost}>Add</Button>
        </Modal>
      </div>
    )
  }
}
