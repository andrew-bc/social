import { sendMessage, updateNewMessage } from "../../../redux/dialogsReducer";
import SendMessageWindow from "./SendMessageWindow";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newMessage: state.dialogsPage.newMessage,
  };
};

const SendMessageWindowContainer = connect(mapStateToProps, { sendMessage, updateNewMessage })(SendMessageWindow);

export default SendMessageWindowContainer;
