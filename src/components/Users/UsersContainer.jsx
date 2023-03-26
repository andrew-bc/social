import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preload from "./../UI/Preload/Preload";
import {
  follow,
  unfollow,
  setCurrentPage,
  setIsFollowingInProgress,
  getUsers,
  setPageSize,
  setTerm,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.totalCount, props.pageSize, pageFromParams]);

  useEffect(() => {
    props.getUsers(props.pageSize, props.currentPage, props.term);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.term]);

  useEffect(() => {
    return () => {
      props.setTerm("");
      props.setCurrentPage(1);
    };
  }, []);

  const onChangedPageNumber = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.getUsers(props.pageSize, pageNumber, props.term);
    navigate(`/users/${pageNumber}`);
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
          setPageSize={props.setPageSize}
          getUsers={props.getUsers}
          term={props.term}
          setTerm={props.setTerm}
          setCurrentPage={props.setCurrentPage}
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
    term: state.users.term,
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
    setIsFollowingInProgress,
    getUsers,
    setPageSize,
    setTerm,
  })
)(UsersContainer);
