import React from "react";
import UserItem from "./UserItem/UserItem";
import { useSelector } from "react-redux";
import { Error } from "./../Error/Error";
import { useEffect } from "react";

import s from "./Users.module.css";
import { Pagination, Stack, TablePagination } from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

const Users = (props) => {
  const isError = useSelector((state) => state.error.isError);
  const errorText = useSelector((state) => state.error.errorText);
  useEffect(() => {
    if (isError) {
      <Error errorText={errorText} />;
    }
  }, [isError, errorText, props.currentPage]);

  const getUsersElements = () => {
    return props.users.map((user) => (
      <UserItem
        userInfo={user}
        key={user.id}
        follow={props.follow}
        unfollow={props.unfollow}
        followingInprogress={props.followingInprogress}
        setIsFollowinfInProgress={props.setIsFollowinfInProgress}
        isAuth={props.isAuth}
      ></UserItem>
    ));
  };

  const handleChange = (event, value) => {
    props.onChangedPageNumber(value);
  };

  const getPaginationElements = () => {
    return (
      <div>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(props.totalCount / props.pageSize)}
            page={+props.currentPage}
            onChange={handleChange}
          />
        </Stack>
      </div>
    );
  };

  return (
    <div className={s.content}>
      <ul className={s.pagination}>{getPaginationElements()}</ul>
      <div className={s.users}>{getUsersElements()}</div>
      <ul className={s.pagination}>{getPaginationElements()}</ul>
      {isError ? <Error errorText={errorText} /> : ""}
    </div>
  );
};

export default Users;
