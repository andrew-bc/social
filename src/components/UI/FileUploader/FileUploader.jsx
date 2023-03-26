import React from "react";
import s from "./FileUploader.module.css";

const FileUploader = (props) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.uploadAvatar(fileUploaded);
  };
  return (
    <div className={s.user__avatar__upload} onClick={handleClick}>
      Upload new photo
      <input type="file" style={{ display: "none" }} ref={hiddenFileInput} onChange={handleChange} />
    </div>
  );
};

export default FileUploader;
