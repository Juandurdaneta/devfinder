// const apiSettings = {
//     fetchUser: (searchTerm) =>{
//         const endpoint = 'https://api.github.com/users/'+searchTerm;
//         fetch(endpoint).then((res) => res.json())
//         .then((json)=> {console.log(json)})
//     }
// }

// export default apiSettings;
const api = 'https://api.github.com/users/'
const apiSettings = {
 getUserData: async(username) => {
    try{
        const response = await fetch(api + username)
        if(!response.ok){
            throw new Error("Can't find that username")
        }
        const data = await response.json()

        return data;


    }catch(error){
        console.error("Error", error)
    }
}

}
export default apiSettings;