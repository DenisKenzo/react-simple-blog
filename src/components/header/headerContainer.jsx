/** Absolute imports */
import {connect} from "react-redux";

/** Global imports */
import Header from "./header";

/** Redux */
import {
  getWinners,
  getGameSettings,
  chooseModeGame,
  getPlayerName,
  isGameStart,
  getGameScore,
  getWinnerPlayer
} from "../../redux/main-reducer";

/** Services */
import {getWinnersRequest} from '../../services/getWinnerUsers'
import {getGameSettingsRequest} from "../../services/getGameSettings";

let mapStateToProps = ({reducerData}) => {
  return {
    winner: reducerData.winner,
    gameSettings: reducerData.gameSettings,
    gameMode: reducerData.gameMode,
    playerName: reducerData.playerName,
    isGameStart: reducerData.isGameStart
  }
};

let mapDispatchToProps = dispatch => {
  return {
    getWinner: winner => dispatch(getWinnerPlayer(winner)),
    getWinners: () => getWinnersRequest().then(response => dispatch(getWinners(response))),
    getSettings: () => getGameSettingsRequest().then(response => dispatch(getGameSettings(response))),
    chooseGame: gameMode => dispatch(chooseModeGame(gameMode)),
    chooseName: playerName => dispatch(getPlayerName(playerName)),
    isGameStartFunction: boolean => dispatch(isGameStart(boolean)),
    getScore: data => dispatch(getGameScore(data))
  }
};
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
