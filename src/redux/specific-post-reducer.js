const GET_POST_DATA = 'GET_COMMENTS';
const ADD_NEW_COMMENT = 'ADD_COMMENT';


let initialState = {
  postData: [],
};


const specificPostReducer = (state = initialState, {payload, type}) => {

  switch (type) {
    case GET_POST_DATA: {
      return {
        ...state, postData: [payload.postData]
      }
    }
    case ADD_NEW_COMMENT: {
      return {
        ...state,
        postData: state.postData.map(posts =>
          ({...posts, comments: [...posts.comments, payload.response]})
        )
      }
    }
    default: return state
  }
};

export const getCommentsActionCreator = postData => ({type: GET_POST_DATA, payload: {postData}});

export const addCommentActionCreator = response => ({type: ADD_NEW_COMMENT, payload: {response}});


export default specificPostReducer;
