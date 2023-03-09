import { sendMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogsReducer";
import SendMessageWindow from "./SendMessageWindow";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newMessage: state.dialogsPage.newMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch(sendMessageActionCreator(message));
    },
    updateNewMessage: (message) => {
      dispatch(updateNewMessageActionCreator(message));
    },
  };
};

const SendMessageWindowContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessageWindow);

export default SendMessageWindowContainer;
