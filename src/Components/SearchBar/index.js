import React, { useRef, useState } from "react";
// styles
import { Wrapper, Content } from "./SearchBar.styles";
// icon
import searchIcon from "../../images/icon-search.svg";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  function handleSubmit(event) {
    setSearchTerm(state);
    event.preventDefault();
    setState("");
  }

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search GitHub username..."
            onChange={(event) => setState(event.currentTarget.value)}
            value={state}
          />

          <button>Search</button>
        </form>
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
