import s from "./EditProfile.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, FormControl, FormControlLabel, InputAdornment, Switch, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import vkicon from "./../../img/social/vk.png";
import githubicon from "./../../img/social/github.png";
import facebookicon from "./../../img/social/facebook.png";
import instagramicon from "./../../img/social/instagram.png";
import twittericon from "./../../img/social/twitter.png";
import websiteicon from "./../../img/social/website.png";
import youtubeicon from "./../../img/social/youtube.png";
import mainLinkicon from "./../../img/social/mainLink.png";
import fakeAvatar from "./../../img/avatar.jpg";
const EditProfile = () => {
  const formik = useFormik({
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
    // validationSchema: Yup.object({
    //   email: Yup.string().email("Invalid email address").required("Required"),
    //   password: Yup.string().required("Required"),
    //   captcha: props.captchaURL ? Yup.string().required("Required") : Yup.string(),
    // }),
    // onSubmit: (values, onSubmitProps) => {
    //   props.loginUserOnSite(
    //     values.email,
    //     values.password,
    //     values.rememberMe,
    //     values.captcha,
    //     onSubmitProps.setStatus,
    //     onSubmitProps.setSubmitting
    //   );
    //   onSubmitProps.setSubmitting(true);
    // },
  });

  return (
    <div className={s.content}>
      <FormControl
        variant="outlined"
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            // width: "40ch"
          },
          "& .MuiFormControl-root": {
            flex: "0 1 45%",
            // width: "40ch"
          },
        }}
      >
        <Box component="div" className={s.top}>
          <Box component="div" className={s.info}>
            <TextField
              required
              id="fullName"
              name="fullName"
              label="Name"
              placeholder="Enter your name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
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
              value={formik.values.aboutMe}
              onChange={formik.handleChange}
              error={formik.touched.aboutMe && Boolean(formik.errors.aboutMe)}
              helperText={formik.touched.aboutMe && formik.errors.aboutMe}
            />

            <FormControlLabel
              sx={{ marginLeft: 0 }}
              control={<Switch defaultChecked id="lookingForAJob" name="lookingForAJob" />}
              label="Looking for a job"
            />

            <TextField
              multiline
              rows={4}
              id="lookingForAJobDescription"
              name="lookingForAJobDescription"
              label="Your skills"
              placeholder="Write about your skills"
              value={formik.values.lookingForAJobDescription}
              onChange={formik.handleChange}
              error={formik.touched.lookingForAJobDescription && Boolean(formik.errors.lookingForAJobDescription)}
              helperText={formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription}
            />
          </Box>
          <Box component="div" className={s.avatar}>
            <img src={fakeAvatar} width="400px" alt="fakeAvater" />
            <Typography>Upload photo</Typography>
          </Box>
        </Box>
        <Box component="div" className={s.bottom}>
          <Box component="div" className={s.contacts}>
            <TextField
              id="github"
              name="github"
              label="github"
              placeholder="Enter your github"
              value={formik.values.github}
              onChange={formik.handleChange}
              error={formik.touched.github && Boolean(formik.errors.github)}
              helperText={formik.touched.github && formik.errors.github}
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
              name="vk"
              label="vk"
              placeholder="Enter your vk"
              value={formik.values.vk}
              onChange={formik.handleChange}
              error={formik.touched.vk && Boolean(formik.errors.vk)}
              helperText={formik.touched.vk && formik.errors.vk}
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
              name="facebook"
              label="facebook"
              placeholder="Enter your facebook"
              value={formik.values.facebook}
              onChange={formik.handleChange}
              error={formik.touched.facebook && Boolean(formik.errors.facebook)}
              helperText={formik.touched.facebook && formik.errors.facebook}
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
              name="instagram"
              label="instagram"
              placeholder="Enter your instagram"
              value={formik.values.instagram}
              onChange={formik.handleChange}
              error={formik.touched.instagram && Boolean(formik.errors.instagram)}
              helperText={formik.touched.instagram && formik.errors.instagram}
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
              name="twitter"
              label="twitter"
              placeholder="Enter your twitter"
              value={formik.values.twitter}
              onChange={formik.handleChange}
              error={formik.touched.twitter && Boolean(formik.errors.twitter)}
              helperText={formik.touched.twitter && formik.errors.twitter}
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
              name="website"
              label="website"
              placeholder="Enter your website"
              value={formik.values.website}
              onChange={formik.handleChange}
              error={formik.touched.website && Boolean(formik.errors.website)}
              helperText={formik.touched.website && formik.errors.website}
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
              name="youtube"
              label="youtube"
              placeholder="Enter your youtube"
              value={formik.values.youtube}
              onChange={formik.handleChange}
              error={formik.touched.youtube && Boolean(formik.errors.youtube)}
              helperText={formik.touched.youtube && formik.errors.youtube}
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
              name="mainLink"
              label="mainLink"
              placeholder="Enter your mainLink"
              value={formik.values.mainLink}
              onChange={formik.handleChange}
              error={formik.touched.mainLink && Boolean(formik.errors.mainLink)}
              helperText={formik.touched.mainLink && formik.errors.mainLink}
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
          {formik.status && <div className={s.error}>{formik.status}</div>}
        </Box>
      </FormControl>
    </div>
  );
};

export default EditProfile;
