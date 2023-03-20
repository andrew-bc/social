import React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { setErrorText, setIsError } from "../../redux/errorReducer";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Error = ({ errorText }) => {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={(event, reason) => {
        setOpen(false);
        dispatch(setIsError(false));
        dispatch(setErrorText(""));
      }}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        {errorText}
      </Alert>
    </Snackbar>
  );
};
