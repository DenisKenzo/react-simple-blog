/** Global imports */
import LeaderBoard from "./leaderBoard";
import {connect} from "react-redux";


let mapStateToProps = state => {
  return {
    leaderBoard: state.reducerData.leaderBoard,
  }
};

let mapDispatchToProps = () => {
  return {}
};

const LeaderBoardContainer = connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);

export default LeaderBoardContainer;
