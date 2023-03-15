import React from "react";
import s from "./UserStatus.module.css";

class UserStatus extends React.Component {
  state = {
    editMode: false,
  };

  handleFocus = (event) => event.target.select();
  changeStatus = (event) => this.props.setStatus(event.target.value, true);

  isThisMyProfile = +this.props.userId === +this.props.myId;

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = (event) => {
    this.setState({ editMode: false });
    this.props.setStatus(event.target.value, false);
  };

  componentDidUpdate() {
    this.isThisMyProfile = +this.props.userId === +this.props.myId;
  }

  render() {
    if (!this.state.editMode) {
      if (this.isThisMyProfile) {
        if (this.props.status) {
          return (
            <span className={s.status__span_my} onClick={this.activateEditMode}>
              {this.props.status}
            </span>
          );
        } else {
          return (
            <span className={s.status__span_nostatus} onClick={this.activateEditMode}>
              Click to change your status...
            </span>
          );
        }
      } else {
        return <span className={s.status__span}>{this.props.status}</span>;
      }
    } else {
      return (
        <>
          <input
            className={s.status__input}
            onBlur={this.deactivateEditMode}
            onFocus={this.handleFocus}
            autoFocus
            value={this.props.status}
            onChange={this.changeStatus}
          />
        </>
      );
    }
  }
}

export default UserStatus;
