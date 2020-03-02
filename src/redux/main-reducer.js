const sendWinner = 'SEND_WINNER';
const getWinnerUsers = 'GET_WINNERS';
const getSettings = 'GET_GAME_SETTINGS';
const chooseGame = 'CHOOSE_GAME_MODE';
const playerName = 'PLAYER_NAME';
const toggleGame = 'TOGGLE_GAME';
const getScore = 'GET_SCORE';
const getWinner = 'GET_WINNER';
const saveWinnerType = 'SAVE_WINNER';

let initialState = {
  leaderBoard: [],
  winner: '',
  isGameStart: false,
  playerName: '',
  gameSettings: [],
  gameMode: {},
  currentMode: {
    field: 0, delay: 0
  },
  gameScore: {player: 0, computer: 0, countToWin: 0}
};


const mainReducer = (state = initialState, {payload, type}) => {

  switch (type) {
    case sendWinner:
      return {
        ...state, winner: payload.winner
      };
    case getWinner:
      return {
        ...state, winner: payload.winner
      };
    case getWinnerUsers: {
      return {
        ...state, leaderBoard: payload.response.data
      }
    }
    case getSettings: {
      return {
        ...state,
        gameMode: payload.response.data,
        gameSettings: Object.entries(payload.response.data)
      }
    }
    case chooseGame: {
      return {
        ...state, currentMode: payload.data
      }
    }
    case playerName: {
      return {
        ...state, playerName: payload.name
      }
    }
    case toggleGame: {
      return {
        ...state, isGameStart: payload.boolean
      }

    }
    case getScore: {
      return {
        ...state, gameScore: payload.data
      }
    }
    case saveWinnerType:
      return {
        ...state, leaderBoard: [...state.leaderBoard, payload.winner]
      };
    default: return state
  }
};

export const sendWinningPlayer = data => ({type: sendWinner, payload: data});

export const getWinnerPlayer = data => ({type: getWinner, payload: data});

export const getWinners = response => ({type: getWinnerUsers, payload: {response}});

export const getGameSettings = response => ({type: getSettings, payload: {response}});

export const chooseModeGame = data => ({type: chooseGame, payload: {data}});

export const getPlayerName = name => ({type: playerName, payload: {name}});

export const isGameStart = boolean => ({type: toggleGame, payload: {boolean}});

export const getGameScore = data => ({type: getScore, payload: {data}});

export const saveWinner = winner => ({type: saveWinnerType, payload: {winner}});


export default mainReducer;
