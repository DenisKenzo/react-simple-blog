/** Global imports */
import PlayGround from "./index";
import {connect} from "react-redux";
/** Redux */
import {sendWinningPlayer, isGameStart, saveWinner} from "../../redux/main-reducer";
/** Services */
import {sendWinnerRequest} from "../../services/sendWinnerRequest";

let mapStateToProps = ({reducerData}) => {
  return {
    currentMode: reducerData.currentMode,
    gameSettings: reducerData.gameSettings,
    isGameStart: reducerData.isGameStart,
    playerName: reducerData.playerName,
    winner: reducerData.winner,
    leaderBoard: reducerData.leaderBoard
  }
};

let mapDispatchToProps = dispatch => {
  return {
    sendWinnerAction: winner => sendWinnerRequest(winner).then(dispatch(sendWinningPlayer(winner))),
    isGameStartFunctionAction: boolean => dispatch(isGameStart(boolean)),
    saveWinnerAction: winner => dispatch(saveWinner(winner))
  }
};

const PlayGroundContainer = connect(mapStateToProps, mapDispatchToProps)(PlayGround);

export default PlayGroundContainer;
