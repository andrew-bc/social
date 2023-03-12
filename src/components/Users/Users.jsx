import React from "react";
import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import axios from "axios";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

class Users extends React.Component {
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

  getUsersElements = () => {
    return this.props.users.map((user) => (
      <UserItem userInfo={user} follow={this.props.follow} unfollow={this.props.unfollow}></UserItem>
    ));
  };

  getPaginationElements = () => {
    // let result = [];
    // for (let i = 1; i <= Math.ceil(this.props.totalCount / this.props.pageSize); i++) {
    //   result.push(
    //     <li
    //       key={i}
    //       className={this.props.currentPage === i ? s.currentPage : ""}
    //       onClick={() => {
    //         this.onChangedPageNumber(i);
    //       }}
    //     >
    //       {i}
    //     </li>
    //   );
    // }
    return (
      <div>
        {/* {result} */}
        <ReactPaginate
          nextLabel="next >"
          onPageChange={this.onChangedPageNumber}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={Math.ceil(this.props.totalCount / this.props.pageSize)}
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
          forcePage={this.props.currentPage - 1}
        />
      </div>
    );
  };

  // onChangedPageNumber = (pageNumber) => {
  //   this.props.setCurrentPage(pageNumber);
  //   axios
  //     .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
  //     .then((response) => {
  //       this.props.setUsers(response.data.items);
  //     });
  // };

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
      <div className={s.content}>
        <ul className={s.pagination}>{this.getPaginationElements()}</ul>
        <div className={s.users}>{this.getUsersElements()}</div>
        <ul className={s.pagination}>{this.getPaginationElements()}</ul>
      </div>
    );
  }
}

export default Users;
