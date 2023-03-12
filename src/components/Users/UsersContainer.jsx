import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Users from "./Users";
import Preload from "./Preload/Preload";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
  setIsFetchingActionCreator,
} from "./../../redux/usersReducer";

import s from "./UsersContainer.module.css";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  onChangedPageNumber = (pageNumber) => {
    this.props.setIsFetching(true);
    let newPageNumber = pageNumber.selected + 1;
    this.props.setCurrentPage(newPageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${newPageNumber}`)
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <div className={s.content}>
        {this.props.isFetching ? (
          <Preload />
        ) : (
          <Users
            users={this.props.users}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onChangedPageNumber={this.onChangedPageNumber}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    isFetching: state.users.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followActionCreator(userId)),
    unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
    setUsers: (users) => dispatch(setUsersActionCreator(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageActionCreator(currentPage)),
    setTotalCount: (totalCount) => dispatch(setTotalCountActionCreator(totalCount)),
    setIsFetching: (isFetching) => dispatch(setIsFetchingActionCreator(isFetching)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
