/** Absolute imports */
import React from 'react';
import moment from "moment";

/** Styles */
import './index.scss';

/** local imports */
import PlayCell from './PlayCell/index'

export default class PlayGround extends React.Component {

  gameLooper = null;

  state = {
    countOfCells: 0,
    delay: 0,
    gameGrid: []
  };

  generatePlayGround() {
    const { countOfCells } = this.state;
    let gameGrid = [];
    for (let i = 0; i < countOfCells; i++) {
      gameGrid.push({
        id: i,
        status: 'empty'
      })
    }
    this.setState({gameGrid});
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const {currentMode: {field, delay}, isGameStart} = nextProps;
    const {currentMode: {field: fieldOld, delay: delayOld}, isGameStart: isGameStartOld} = this.props;
    if (fieldOld !== field || delayOld !== delay) {
      this.setState({countOfCells: field * field, delay }, () => this.generatePlayGround());
    }
    if (!isGameStartOld && isGameStart) {
      this.setState({gameGrid: []}, () => this.startGame());
    }
  }

  startGame = () => {
    this.generatePlayGround();
    this.gameLooper = setInterval(this.selectRandomCell, this.state.delay);
  };

  setFailedStatus = (id) => {
    setTimeout(() => {
      if (!this.gameLooper) return false;
      const {gameGrid} = this.state;
      const currentCell = gameGrid.find(cell => cell.id === id);
      if (currentCell.status === 'pressed') return false;
      currentCell.status = 'failed';
      this.setState({gameGrid}, () => this.checkWhoIsWin());
    }, this.state.delay)
  };

  selectRandomCell = () => {
    if (!this.props.isGameStart) {
      clearInterval(this.gameLooper);
      return false
    }
    const {countOfCells, gameGrid} = this.state;
    const randomCellId = Math.floor(Math.random() * countOfCells);
    if (gameGrid.some(cell => cell.id === randomCellId && cell.status !== 'empty') ) {
      this.selectRandomCell();
      return false;
    }
    const currentCell = gameGrid.find(cell => cell.id === randomCellId);
    currentCell.status = 'selected';
    this.setState({gameGrid}, () => this.setFailedStatus(currentCell.id));
  };

  onCellClick = id => {
    const {gameGrid} = this.state;
    const currentCell = gameGrid.find(cell => cell.id === id);
    if (currentCell.status !== 'selected') return false;
    currentCell.status = 'pressed';
    this.setState({gameGrid}, () => this.checkWhoIsWin());
  };

  onGameEnd = winnerName => {
    this.clearPlateGround();
    clearInterval(this.gameLooper);
    this.gameLooper = null;
    this.props.isGameStartFunctionAction(false);
    const winner = {
      winner: winnerName,
      date: moment().format("H:mm; DD MMMM YYYY")
    };
    this.props.sendWinnerAction(winner);
    this.props.saveWinnerAction(winner);
  };

  clearPlateGround = () => {
    const {gameGrid} = this.state;
    gameGrid.forEach(cell => {
      if (cell.status === 'selected') cell.status = 'empty';
    });
    this.setState({gameGrid})
  };

  checkWhoIsWin = () => {
    const {gameGrid, countOfCells} = this.state;
    let countOfPressed = 0;
    let countOfFailed = 0;
    gameGrid.forEach(cell => {
      if (cell.status === 'failed') countOfFailed++;
      if (cell.status === 'pressed') countOfPressed++;
    });
    if (countOfFailed >= countOfCells / 2) this.onGameEnd('AI');
    if (countOfPressed >= countOfCells / 2) this.onGameEnd(this.props.playerName);
  };

  render() {
    const { gameGrid } = this.state;
    const {currentMode: {field}} = this.props;
    return (
      <div className='playGround'>
        <div className={`GameBoard size_${field}`}>
          {gameGrid.map(cell =>
            <PlayCell
              key={cell.id}
              status={cell.status}
              onCellClick={() => this.onCellClick(cell.id)}
            />
          )}
        </div>
      </div>
    );
  }
}
