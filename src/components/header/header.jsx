/** Absolute imports */
import React, { Component } from "react";
import { Select, Button, Modal } from 'react-materialize';

/** Style */
import style from './header.module.scss'


export default class Header extends Component {

  state = {isOpenModal: false, gameMode: ''};

  componentDidMount() {
    this.props.getSettings();
    this.props.getWinners();
  }

  handleChangeGameMod = e => {
    let gameMode = e.target.value;
    this.props.chooseGame(this.props.gameMode[gameMode]);
    this.setState({gameMode});
    this.props.getScore({ player: 0, computer: 0, countToWin: 0 });
    this.props.isGameStartFunction(false);
    this.props.getWinner('');
  };

  startGame = () => {
    if (!this.props.playerName || !this.state.gameMode) {
      this.setState({isOpenModal:true});
    } else {
      this.props.isGameStartFunction(true);
      this.props.getWinner('');
    }
  };

  closeModal = () => {
    this.setState({isOpenModal: false});
  };

  handleChangePlayerName = e => this.props.chooseName(e.target.value);

  render() {
    const {gameSettings, playerName, isGameStart} = this.props;
    return (
      <div>
        <div className={style.header}>
          <Modal options={{onCloseEnd: this.closeModal}} open={this.state.isOpenModal}>
            {
              !this.state.gameMode
                ? <p className={style.p_modal}>Please, choose game mode</p>
                : <p className={style.p_modal}>Please, enter you name</p>
            }
          </Modal>
          <div className={style.select}>
            {gameSettings.length ? (
              <div className="pick-game-mod-select">
                <Select
                  style={{ width: 200 }}
                  onChange={e => this.handleChangeGameMod(e)}
                  value={this.state.gameMode}
                >
                  <option disabled value=''>Choose your option</option>
                  {gameSettings.map((item) => <option key={item[0]} value={item[0]}>{item[0]}</option>)}
                </Select>
              </div>
            ) : (
              <div> loading... </div>
            )}
            <div>
              <input type='text' value={playerName} onChange={this.handleChangePlayerName} placeholder={'Enter you name'}/>
            </div>
            <Button onClick={() => this.startGame()} disabled={isGameStart}>{this.props.winner ? 'Play again' : 'Play'}</Button>
          </div>
          <div>
            {this.props.winner && <div className={style.winner}>The winner is {this.props.winner}</div>}
          </div>
        </div>
      </div>
    )
  }
}
