const GET_POSTS = 'GET_POSTS';
const ADD_NEW_POST = 'ADD_POST';
const IS_ADDING_POST = 'IS_ADD_POST';
const DEL_POST = 'DEL_POST';
const UPD_POST = 'UPDATE_POST';


let initialState = {
  postList: [],
  isAddingPost: false
};


const postsReducer = (state = initialState, {payload, type}) => {

  switch (type) {
    case GET_POSTS: {
      return {
        ...state, postList: payload.posts.data
      }
    }
    case ADD_NEW_POST: {
      return {
        ...state, postList: [...state.postList, payload.response]
      }
    }
    case IS_ADDING_POST: {
      return {
        ...state, isAddingPost: payload.boolean
      }
    }
    case DEL_POST: {
      return {
        ...state, postList: state.postList.filter(i => i.id !== payload.id)
      }
    }
    case UPD_POST: {
      return {
        ...state,
        postList: state.postList.map(posts => {
          if (posts.id === payload.id) {
            return {...posts, title: payload.newPost.data.title, body: payload.newPost.data.body}
          }
          return posts
        } )
      }
    }
    default: return state
  }
};

export const getPostsListActionCreator = posts => ({type: GET_POSTS, payload: {posts}});

export const isAddPostActionCreator = boolean => ({type: IS_ADDING_POST, payload: {boolean}});

export const deletePostActionCreator = id => ({type: DEL_POST, payload: {id}});

export const addPostActionCreator = response => ({type: ADD_NEW_POST, payload: {response}});

export const updatePostActionCreator = (newPost, id) => ({type: UPD_POST, payload: {newPost, id}});

export default postsReducer;
