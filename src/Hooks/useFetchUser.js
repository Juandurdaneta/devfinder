import { useState, useEffect } from "react";
// API
import API from "../API";

const initialState = {
    user : ""
};

export const useFetchUser = () =>{
    const [searchTerm, setSearchTerm] = useState("octocat");
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchUser = async (searchTerm = "") =>{
        try{
            setError(false);
            setLoading(true);

            const user = await API.getUserData(searchTerm);

            setState(user);

        } catch(error){
            console.log(error)
            setError(true);
        }

        setLoading(false);

    };

    useEffect(()=>{
        setState(initialState);
        fetchUser(searchTerm);
    }, [searchTerm]);


    return {state, searchTerm, setSearchTerm, error, loading}

}