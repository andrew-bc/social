import { connect } from "react-redux";
import Users from "./Users";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
} from "./../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followActionCreator(userId)),
    unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
    setUsers: (users) => dispatch(setUsersActionCreator(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageActionCreator(currentPage)),
    setTotalCount: (totalCount) => dispatch(setTotalCountActionCreator(totalCount)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
