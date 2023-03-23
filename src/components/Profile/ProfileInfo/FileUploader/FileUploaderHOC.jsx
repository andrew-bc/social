import React from "react";
import s from "./FileUploader.module.css";

const FileUploaderHOC = ({ children }) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    //props.uploadAvatar(fileUploaded);
  };
  return (
    <div>
      {children}
      {console.log(children)}
      <input type="file" style={{ display: "block" }} ref={hiddenFileInput} onChange={handleChange} />
    </div>
  );
};

export default FileUploaderHOC;
