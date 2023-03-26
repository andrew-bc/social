import React from "react";
import UserItem from "./UserItem/UserItem";
import { useSelector } from "react-redux";
import { Error } from "./../Error/Error";
import { useEffect } from "react";

import s from "./Users.module.css";
import PaginationElement from "../UI/PaginationElement/PaginationElement.jsx";
import SearchBar from "./SearchBar/SeacrhBar";

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
        setIsFollowingInProgress={props.setIsFollowingInProgress}
        isAuth={props.isAuth}
      ></UserItem>
    ));
  };

  return (
    <div className={s.content}>
      <SearchBar
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        getUsers={props.getUsers}
        setTerm={props.setTerm}
        setCurrentPage={props.setCurrentPage}
        term={props.term}
      />

      {props.totalCount > 0 ? (
        <>
          <ul className={s.pagination}>
            <PaginationElement
              onChangedPageNumber={props.onChangedPageNumber}
              pageSize={props.pageSize}
              currentPage={props.currentPage}
              totalCount={props.totalCount}
            />
          </ul>
          <div className={s.users}>{getUsersElements()}</div>
          <ul className={s.pagination}>
            <PaginationElement
              onChangedPageNumber={props.onChangedPageNumber}
              pageSize={props.pageSize}
              currentPage={props.currentPage}
              totalCount={props.totalCount}
            />
          </ul>
        </>
      ) : (
        "Users not found"
      )}

      {isError ? <Error errorText={errorText} /> : ""}
    </div>
  );
};

export default Users;
