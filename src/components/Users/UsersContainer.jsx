import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preload from "../Preload/Preload";
import { follow, unfollow, setCurrentPage, setIsFollowinfInProgress, getUsers } from "./../../redux/usersReducer";

import s from "./UsersContainer.module.css";
import { compose } from "redux";

const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsers(props.pageSize, props.currentPage);
  }, [props.pageSize, props.currentPage]);

  const onChangedPageNumber = (pageNumber) => {
    let newPageNumber = pageNumber.selected + 1;
    props.setCurrentPage(newPageNumber);
    props.getUsers(props.pageSize, newPageNumber);
  };

  return (
    <div className={s.content}>
      {props.isFetching ? (
        <Preload />
      ) : (
        <Users
          users={props.users}
          totalCount={props.totalCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          follow={props.follow}
          unfollow={props.unfollow}
          onChangedPageNumber={onChangedPageNumber}
          setIsFollowinfInProgress={props.setIsFollowinfInProgress}
          followingInprogress={props.followingInprogress}
        />
      )}
    </div>
  );
};

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
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setIsFollowinfInProgress,
    getUsers,
  })
)(UsersContainer);
