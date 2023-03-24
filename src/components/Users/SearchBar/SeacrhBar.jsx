import React, { useRef, useState, useEffect } from "react";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const searchRef = useRef(null);
  const navigate = useNavigate();
  let [term, setTerm] = useState(props.term);

  useEffect(() => {
    setTerm(props.term);
  }, [props.term]);

  const handleClick = () => {
    props.setCurrentPage(1);
    props.setTerm(searchRef.current.value);
    setTerm(searchRef.current.value);
    navigate(`/users/1`);
  };

  const handleChange = () => {
    setTerm(searchRef.current.value);
  };
  const handlePress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      <TextField
        sx={{ width: "50%", textAlign: "center" }}
        id="search"
        type="search"
        label="Search"
        inputRef={searchRef}
        value={term}
        onChange={handleChange}
        onKeyPress={handlePress}
        InputProps={{
          endAdornment: (
            <InputAdornment sx={{ cursor: "pointer" }} position="end">
              <SearchIcon onClick={handleClick} />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default SearchBar;
