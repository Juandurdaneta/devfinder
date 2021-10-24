import {React, useState} from "react";
import { GlobalStyle } from "./GlobalStyle";

// components
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import UserInfo from "./Components/UserInfo";
import Spinner from "./Components/Spinner";
// hooks
import { useFetchUser } from "./Hooks/useFetchUser";

function App() {
  const {state, searchTerm, setSearchTerm, error, loading} = useFetchUser();

  if(error){
    return <div>Something went wrong...</div>
  }
  

  console.log(state)



  return (
    <div className="App">
    <Header/>
    <SearchBar setSearchTerm={setSearchTerm}/>
    { loading ? <Spinner/> : <UserInfo user={state}/> }
    <GlobalStyle />
    </div>
  );
}

export default App;
