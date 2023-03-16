import React from "react";
import s from "./UserStatus.module.css";

class UserStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  handleFocus = (event) => event.target.select();
  changeStatus = (event) => this.setState({ status: event.target.value });

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = (event) => {
    this.setState({ editMode: false });
    this.props.setStatus(this.state.status);
  };

  componentDidUpdate() {}

  render() {
    if (!this.state.editMode) {
      if (this.props.myId === this.props.userId) {
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
            value={this.state.status}
            onChange={this.changeStatus}
          />
        </>
      );
    }
  }
}

export default UserStatus;
