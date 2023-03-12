import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Users from "./Users";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
} from "./../../redux/usersReducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  onChangedPageNumber = (pageNumber) => {
    let newPageNumber = pageNumber.selected + 1;
    this.props.setCurrentPage(newPageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${newPageNumber}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        users={this.props.users}
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onChangedPageNumber={this.onChangedPageNumber}
      />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
