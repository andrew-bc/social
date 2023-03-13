import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAutharization } from "./../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAutharization();
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

export default connect(mapStateToProps, { getAutharization })(HeaderContainer);
