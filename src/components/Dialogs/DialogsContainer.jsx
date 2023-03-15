import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirect from "./../../hoc/AuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispath) => {
  return {};
};

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs);
