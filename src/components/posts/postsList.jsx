import React from "react";
import { Button } from 'react-materialize';
import { NavLink } from "react-router-dom";

// styles
import style from './posts.module.scss'

export default class PostsList extends React.Component {

  render() {
    let { index, post, deletePost, replacePost } = this.props;
    return (
      <div key={index} className={style.post}>
        <div className={style.title}>{post.title}</div>
        <div className={style.post_content}>
          <div className={style.body_text}>{post.body}</div>
            <div className={style.buttons_wrap}>
              <Button className={style.btn} onClick={() => deletePost(post.id)}>Delete Post</Button>
              <Button className={style.btn} onClick={() => replacePost(post)}>Edit</Button>
              <Button className={style.btn}>
                <NavLink className={style.nav_link} to={`/posts/${post.id}`}>View full post</NavLink>
              </Button>
            </div>
        </div>
      </div>
    )
  }
}
