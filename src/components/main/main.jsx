/** Absolute imports */
import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";

/** Styles */
import style from './main.module.scss'

/** local imports */
import HeaderContainer from "../header/headerContainer";
import PostsContainer from "../posts/postsContainer";
import SinglePostContainer from "../singlePost/singlePostContainer";

export default class Main extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Provider store={this.props.store}>
          <div className={style.main_container}>
            <div className={style.contentContainer}>
              <HeaderContainer/>
              <Route path={'/posts'} exact component={PostsContainer} />
              <Route path={'/posts/:id'} component={SinglePostContainer} />
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}
