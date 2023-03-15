import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirect from "./../../hoc/AuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispath) => {
  return {};
};

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default DialogsContainer;
