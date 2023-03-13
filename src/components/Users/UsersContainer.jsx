import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preload from "./Preload/Preload";
import { follow, setUsers, unfollow, setCurrentPage, setTotalCount, setIsFetching } from "./../../redux/usersReducer";

import s from "./UsersContainer.module.css";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalCount(data.totalCount);
    });
  }

  onChangedPageNumber = (pageNumber) => {
    this.props.setIsFetching(true);
    let newPageNumber = pageNumber.selected + 1;
    this.props.setCurrentPage(newPageNumber);
    usersAPI.getUsers(this.props.pageSize, newPageNumber).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setIsFetching,
})(UsersContainer);
