/** Absolute imports */
import React from "react";
import {Provider} from "react-redux";
/** local imports */
import PlayGroundContainer from "../PlayGround/playGroundContainer";
import HeaderContainer from "../header/headerContainer";
import LeaderBoardContainer from "../leaderBoard/leaderBoardContainer";
/** Styles */
import style from './main.module.scss'

export default class Main extends React.Component {

  render() {
    return (
        <Provider store={this.props.store}>
          <div className={style.main_container}>
            <div className={style.contentContainer}>
              <HeaderContainer />
              <PlayGroundContainer />
            </div>
            <div className={style.leaderBoardContainer}>
              <LeaderBoardContainer />
            </div>
          </div>
        </Provider>
    )
  }
}
