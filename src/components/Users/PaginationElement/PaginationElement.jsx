import React from "react";
import { Pagination, Stack } from "@mui/material";

const PaginationElement = (props) => {
  const handleChange = (event, value) => {
    props.onChangedPageNumber(value);
  };

  return (
    <div>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(props.totalCount / props.pageSize)}
          page={+props.currentPage}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default PaginationElement;
