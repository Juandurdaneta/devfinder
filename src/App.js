import {React, useState} from "react";
import { GlobalStyle } from "./GlobalStyle";

import SearchBar from "./SearchBar";

import API from "./API";
import Header from "./Header";
import { useFetchUser } from "./Hooks/useFetchUser";

function App() {
  const {state, searchTerm, setSearchTerm, error, loading} = useFetchUser();

  if(error){
    return <div>Something went wrong...</div>
  }

  console.log(state);


  return (
    <div className="App">
    <Header/>
    <SearchBar/>
    <GlobalStyle />
    </div>
  );
}

export default App;
