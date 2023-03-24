import s from "./EditProfile.module.css";
import withAuthRedirect from "./../../hoc/AuthRedirect";
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import {
  Alert,
  AlertTitle,
  Button,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Switch,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import vkicon from "./../../img/social/vk.png";
import githubicon from "./../../img/social/github.png";
import facebookicon from "./../../img/social/facebook.png";
import instagramicon from "./../../img/social/instagram.png";
import twittericon from "./../../img/social/twitter.png";
import websiteicon from "./../../img/social/website.png";
import youtubeicon from "./../../img/social/youtube.png";
import mainLinkicon from "./../../img/social/mainLink.png";
import noAvatar from "./../../img/noAvatar.svg";
import { useEffect, useRef, useState } from "react";
import { profileAPI } from "../../api/api";
import { useSelector } from "react-redux";
import { setAvatarURL as setAvatarURLDispatch } from "./../../redux/authReducer";
import { useDispatch } from "react-redux";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const EditProfile = () => {
  const URL =
    /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

  const [confirmMessage, setConfirmMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [avatarURL, setAvatarURL] = useState(null);

  const alertRef = useRef(null);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: "",
      aboutMe: "",
      lookingForAJob: false,
      lookingForAJobDescription: "",
      contacts: {
        github: "",
        vk: "",
        facebook: "",
        instagram: "",
        twitter: "",
        website: "",
        youtube: "",
        mainLink: "",
      },
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      aboutMe: Yup.string().required("Required"),
      contacts: Yup.object().shape({
        github: Yup.string().nullable(true).matches(URL, "Enter correct url"),
        vk: Yup.string().nullable(true).matches(URL, "Enter correct url"),
        facebook: Yup.string().nullable(true).matches(URL, "Enter correct url"),
        instagram: Yup.string().nullable(true).matches(URL, "Enter correct url"),
        twitter: Yup.string().nullable(true).matches(URL, "Enter correct url"),
        website: Yup.string().nullable(true).matches(URL, "Enter correct url"),
        youtube: Yup.string().nullable(true).matches(URL, "Enter correct url"),
        mainLink: Yup.string().nullable(true).matches(URL, "Enter correct url"),
      }),
    }),
    onSubmit: (values, onSubmitProps) => {
      onSubmitProps.setSubmitting(true);
      setConfirmMessage(false);
      setErrorMessage(null);
      delete values.photos;
      delete values.userId;
      profileAPI
        .setProfileInfo(values)
        .then((data) => {
          if (data.resultCode === 0) {
            setConfirmMessage(true);
          } else {
            setErrorMessage(data.messages);
          }
          alertRef.current.scrollIntoView();
          onSubmitProps.setSubmitting(false);
        })
        .catch((e) => {
          setErrorMessage(e.messages);
          onSubmitProps.setSubmitting(false);
        });
    },
  });

  const myId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();

  useEffect(() => {
    profileAPI
      .getProfileByUserId(myId)
      .then((data) => {
        formik.setValues(data);
        setAvatarURL(data.photos.large);
      })
      .catch((e) => setErrorMessage(e.messages));
  }, [myId]);

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setConfirmMessage(false);
    setErrorMessage(null);
    profileAPI
      .setAvatar(fileUploaded)
      .then((data) => {
        if (data.resultCode === 0) {
          setConfirmMessage(true);
          setAvatarURL(data.data.photos.large);
          dispatch(setAvatarURLDispatch(data.data.photos.small));
        } else {
          setErrorMessage(data.messages);
        }
        alertRef.current.scrollIntoView();
      })
      .catch((e) => {
        setErrorMessage(e.messages);
      });
  };

  return (
    <div className={s.content}>
      <FormControl
        onSubmit={formik.handleSubmit}
        variant="outlined"
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
          },
          "& .MuiFormControl-root": {
            flex: "0 1 45%",
          },
        }}
      >
        <Box ref={alertRef}>
          {confirmMessage && (
            <Alert sx={{}} severity="success">
              <AlertTitle>Changes saved</AlertTitle>
              Your profile has been successfully updated.
            </Alert>
          )}
          {errorMessage && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle> {errorMessage ?? ""}
            </Alert>
          )}
        </Box>

        <Box component="div" className={s.top}>
          <Box component="div" className={s.info}>
            <TextField
              id="fullName"
              name="fullName"
              label="Name"
              placeholder="Enter your name"
              value={formik.values.fullName ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />

            <TextField
              multiline
              rows={4}
              id="aboutMe"
              name="aboutMe"
              label="Brief information"
              placeholder="Write about yourself"
              value={formik.values.aboutMe ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.aboutMe && Boolean(formik.errors.aboutMe)}
              helperText={formik.touched.aboutMe && formik.errors.aboutMe}
            />

            <FormControlLabel
              sx={{ marginLeft: 0 }}
              control={
                <Switch
                  checked={formik.values.lookingForAJob}
                  onChange={(value) => {
                    console.log(value.target.checked);
                    formik.setFieldValue("lookingForAJob", value.target.checked);
                  }}
                  id="lookingForAJob"
                  name="lookingForAJob"
                />
              }
              label="Looking for a job"
            />

            <TextField
              multiline
              rows={4}
              id="lookingForAJobDescription"
              name="lookingForAJobDescription"
              label="Your skills"
              placeholder="Write about your skills"
              value={formik.values.lookingForAJobDescription ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lookingForAJobDescription && Boolean(formik.errors.lookingForAJobDescription)}
              helperText={formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription}
            />
          </Box>
          <Box component="div" className={s.user__avatar}>
            <Box component="div" onClick={handleClick} className={s.user__avatar__photo}>
              <img
                className={s.user__avatar__photo__url}
                src={avatarURL ? avatarURL : noAvatar}
                alt="Profile"
                width="100%"
              />
              <Box component="div" className={s.user__avatar__photo__upload}>
                <PhotoCameraIcon sx={{ fontSize: 90 }} />
              </Box>
            </Box>
            <input type="file" style={{ display: "none" }} ref={hiddenFileInput} onChange={handleChange} />
          </Box>
        </Box>
        <Box component="div" className={s.bottom}>
          <Box component="div" className={s.contacts}>
            <TextField
              id="github"
              name="contacts.github"
              label="github"
              placeholder="Enter your github"
              value={formik.values.contacts.github ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={getIn(formik.touched, "contacts.github") && Boolean(getIn(formik.errors, "contacts.github"))}
              helperText={getIn(formik.touched, "contacts.github") && getIn(formik.errors, "contacts.github")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img className={s.imageIcon} src={githubicon} alt="vk" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="vk"
              name="contacts.vk"
              label="vk"
              placeholder="Enter your vk"
              value={formik.values.contacts.vk ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={getIn(formik.touched, "contacts.vk") && Boolean(getIn(formik.errors, "contacts.vk"))}
              helperText={getIn(formik.touched, "contacts.vk") && getIn(formik.errors, "contacts.vk")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img className={s.imageIcon} src={vkicon} alt="vk" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="facebook"
              name="contacts.facebook"
              label="facebook"
              placeholder="Enter your facebook"
              value={formik.values.contacts.facebook ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={getIn(formik.touched, "contacts.facebook") && Boolean(getIn(formik.errors, "contacts.facebook"))}
              helperText={getIn(formik.touched, "contacts.facebook") && getIn(formik.errors, "contacts.facebook")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img className={s.imageIcon} src={facebookicon} alt="facebook" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="instagram"
              name="contacts.instagram"
              label="instagram"
              placeholder="Enter your instagram"
              value={formik.values.contacts.instagram ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={getIn(formik.touched, "contacts.instagram") && Boolean(getIn(formik.errors, "contacts.instagram"))}
              helperText={getIn(formik.touched, "contacts.instagram") && getIn(formik.errors, "contacts.instagram")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img className={s.imageIcon} src={instagramicon} alt="instagram" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="twitter"
              name="contacts.twitter"
              label="twitter"
              placeholder="Enter your twitter"
              value={formik.values.contacts.twitter ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={getIn(formik.touched, "contacts.twitter") && Boolean(getIn(formik.errors, "contacts.twitter"))}
              helperText={getIn(formik.touched, "contacts.twitter") && getIn(formik.errors, "contacts.twitter")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img className={s.imageIcon} src={twittericon} alt="twitter" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="website"
              name="contacts.website"
              label="website"
              placeholder="Enter your website"
              value={formik.values.contacts.website ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={getIn(formik.touched, "contacts.website") && Boolean(getIn(formik.errors, "contacts.website"))}
              helperText={getIn(formik.touched, "contacts.website") && getIn(formik.errors, "contacts.website")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img className={s.imageIcon} src={websiteicon} alt="website" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="youtube"
              name="contacts.youtube"
              label="youtube"
              placeholder="Enter your youtube"
              value={formik.values.contacts.youtube ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={getIn(formik.touched, "contacts.youtube") && Boolean(getIn(formik.errors, "contacts.youtube"))}
              helperText={getIn(formik.touched, "contacts.youtube") && getIn(formik.errors, "contacts.youtube")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img className={s.imageIcon} src={youtubeicon} alt="youtube" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="mainLink"
              name="contacts.mainLink"
              label="mainLink"
              placeholder="Enter your mainLink"
              value={formik.values.contacts.mainLink ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={getIn(formik.touched, "contacts.mainLink") && Boolean(getIn(formik.errors, "contacts.mainLink"))}
              helperText={getIn(formik.touched, "contacts.mainLink") && getIn(formik.errors, "contacts.mainLink")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img className={s.imageIcon} src={mainLinkicon} alt="mainLink" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box className={s.saveButton}>
          <Button sx={{ maxWidth: "150px" }} variant="contained" type="submit" disabled={formik.isSubmitting}>
            Save
          </Button>
        </Box>
      </FormControl>
    </div>
  );
};

export default withAuthRedirect(EditProfile);
