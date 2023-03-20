import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preload from "../Preload/Preload";
import {
  follow,
  unfollow,
  setCurrentPage,
  setIsFollowinfInProgress,
  getUsers,
  getTotalCount,
} from "./../../redux/usersReducer";

import s from "./UsersContainer.module.css";
import { compose } from "redux";
import { useNavigate, useParams } from "react-router-dom";

const UsersContainer = (props) => {
  let pageFromParams = useParams().page;
  let navigate = useNavigate();

  useEffect(() => {
    if (pageFromParams && pageFromParams >= 1 && pageFromParams <= Math.ceil(props.totalCount / props.pageSize)) {
      props.setCurrentPage(pageFromParams);
    }
    props.getUsers(props.pageSize, props.currentPage);
  }, [props.totalCount, props.pageSize, pageFromParams, props.currentPage]);

  const onChangedPageNumber = (pageNumber) => {
    let newPageNumber = pageNumber.selected + 1;
    props.setCurrentPage(newPageNumber);
    props.getUsers(props.pageSize, newPageNumber);
    navigate(`/users/${newPageNumber}`);
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
          isAuth={props.isAuth}
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
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setIsFollowinfInProgress,
    getUsers,
    getTotalCount,
  })
)(UsersContainer);
