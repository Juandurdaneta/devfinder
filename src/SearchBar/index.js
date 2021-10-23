import React from "react";
// styles
import { Wrapper, Content } from "./SearchBar.styles";
// icon
import searchIcon from "../images/icon-search.svg"

const SearchBar = ({ setSearchTerm }) => {
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <button>Search</button>
        <input type="text" placeholder="Search GitHub username..." />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;