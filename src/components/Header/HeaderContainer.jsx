import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthData } from "./../../redux/authReducer";
import axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0//auth/me", { withCredentials: true }).then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        this.props.setAuthData({ id, email, login });
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { setAuthData })(HeaderContainer);