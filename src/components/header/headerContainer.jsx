import {connect} from 'react-redux';
import Header from "./header";
import {isAddPostActionCreator} from "../../redux/posts-reducer";


let mapStateToProps = state => {
  return {
    isAddingPost: state.postsReducer.isAddingPost
  }
};

let mapDispatchToProps = dispatch => {
  return {
    isAddPostAction: boolean => dispatch(isAddPostActionCreator(boolean))
  }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
