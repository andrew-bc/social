import React from "react";
import { Button } from "@mui/material";

//id
//followingInprogress
//follow
//unfollow
// isFollowButton (true for "Foolow" and false for "Unfollow")
const FollowButton = ({ id, follow, unfollow, isFollowButton = true }) => {
  return (
    <Button
      color={isFollowButton ? "primary" : "error"}
      variant="contained"
      size="large"
      sx={{ width: "120px" }}
      onClick={() => {
        // eslint-disable-next-line no-lone-blocks
        {
          isFollowButton ? follow(id) : unfollow(id);
        }
      }}
    >
      {isFollowButton ? "Follow" : "Unfollow"}
    </Button>
  );
};

export default FollowButton;
