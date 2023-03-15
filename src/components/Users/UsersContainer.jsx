import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preload from "./Preload/Preload";
import { follow, unfollow, setCurrentPage, setIsFollowinfInProgress, getUsers } from "./../../redux/usersReducer";

import s from "./UsersContainer.module.css";
import withAuthRedirect from "./../../hoc/AuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }

  onChangedPageNumber = (pageNumber) => {
    let newPageNumber = pageNumber.selected + 1;
    this.props.setCurrentPage(newPageNumber);
    this.props.getUsers(this.props.pageSize, newPageNumber);
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
            setIsFollowinfInProgress={this.props.setIsFollowinfInProgress}
            followingInprogress={this.props.followingInprogress}
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
    followingInprogress: state.users.followingInprogress,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setIsFollowinfInProgress,
    getUsers,
  })
)(UsersContainer);
