import { useEffect, useState } from "react";


import GitUser from "./GitUser";

export default function Git(){


    const [data, setData] = useState(null);

    //for errors while fetching user
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect( () =>{
        setLoading(true);  //Set loading to true before fetching
        
        fetch('https://api.github.com/users/anish1A1')
       
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network was not okay')
            }
            return response.json()  //converts the response in json
            
        } )  
        .then((userData) =>{
            setData(userData);  //and the json response is set to setData
            setLoading(false);
        }) 
        .catch((error) =>{
            setError(error);
            setLoading(false);
        });
    }, []);  

   

  


    if (loading) return <div>Loading ...</div>;   //when fetching data takes time loading will set to true and returns this

    if (error) 
        return <pre>{JSON.stringify(error)}</pre>;  //shows error if any

    if(!data) return null  //if the username has no name in the github database then returns null

    //using array destructing for location
    const {location} = data

    return (
        <h1>
           
            <br />

           <GitUser name={data.name} location ={location || 'No location defined' } 
           avatar = {data.avatar_url} height = "150" 
           />

        </h1>
      
    );
}