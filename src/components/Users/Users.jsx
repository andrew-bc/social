import React from "react";
import ReactPaginate from "react-paginate";
import UserItem from "./UserItem/UserItem";

import s from "./Users.module.css";

const Users = (props) => {
  const getUsersElements = () => {
    return props.users.map((user) => (
      <UserItem userInfo={user} key={user.id} follow={props.follow} unfollow={props.unfollow}></UserItem>
    ));
  };

  const getPaginationElements = () => {
    return (
      <div>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={props.onChangedPageNumber}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={Math.ceil(props.totalCount / props.pageSize)}
          previousLabel="< previous"
          pageClassName={s.page__item}
          pageLinkClassName={s.page__link}
          previousClassName={s.page__item}
          previousLinkClassName={s.page__link}
          nextClassName={s.page__item}
          nextLinkClassName={s.page__link}
          breakLabel="..."
          breakClassName={s.page__item}
          breakLinkClassName={s.page__link}
          containerClassName={s.pagination}
          activeClassName={s.currentPage}
          renderOnZeroPageCount={null}
          forcePage={props.currentPage - 1}
        />
      </div>
    );
  };

  return (
    <div className={s.content}>
      <ul className={s.pagination}>{getPaginationElements()}</ul>
      <div className={s.users}>{getUsersElements()}</div>
      <ul className={s.pagination}>{getPaginationElements()}</ul>
    </div>
  );
};

export default Users;
