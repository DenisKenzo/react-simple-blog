import React from "react";
import { Button } from 'react-materialize';

// styles
import style from './singlePost.module.scss'

export default class PostData extends React.Component {

  render() {
    let { index, post, addComment } = this.props;
    return (
      <div key={index}>
        <h3>{post.title}</h3>
        <div className={style.body_text}>{post.body}</div>
        <div className={style.comments_block}>
          <div className={style.head}>
            <span className={style.head_title}>Comments</span>
            <Button onClick={() => addComment(post)}>Add comment</Button>
          </div>
          {
            post.comments.length > 0 ?
              <div className={style.comments}>
              {post.comments.map((comment, index) =>
                <div className={style.single_comment} key={index}>{comment.body}</div>)}
              </div>
              : 'There is no comments'
          }
        </div>
      </div>
    )
  }
}
