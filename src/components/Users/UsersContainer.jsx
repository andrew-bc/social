import { connect } from "react-redux";
import Users from "./Users";
import { followActionCreator, unfollowActionCreator } from "./../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followActionCreator(userId)),
    unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
