import React from "react";
import style from './leaderBoard.module.scss'

export default class LeaderBoard extends React.Component {



  render() {
    return (
      <div>
        <h2>Leader Board</h2>
        <div className={style.boardContainer}>
          <div className={style.leaderBoard}>
            {
              this.props.leaderBoard.slice().reverse().map((item, index) => {
                return (
                  <div key={index} className={style.leaderInfo}>
                    <span className={style.winner}>{item.winner}</span>
                    <span>{item.date}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
