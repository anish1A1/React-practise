import Lift from "./Lift";
import { useState, useEffect, useMemo } from "react";

export default function UsingGraphql(){

const query =`
    query{
        allLifts {
            name
            elevationGain
            status
        }   
}`
//opts a function that returns a value. This function will be executed to compute the value you want to memoize.
    const opts = useMemo(() => ({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
    }), [query]);

    const [data, setData] = useState(null);

    //for errors while fetching user
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)


    useEffect( () =>{
        setLoading(true);  //Set loading to true before fetching
        
        fetch('https://snowtooth.moonhighway.com/', opts)
       
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network was not okay')
            }
            return response.json()  //converts the response in json
            
        } )  
        .then((userData) =>{
            setData(userData);  //and the json response is set to setData
            setLoading(false);  // Set loading to false after fetching data
        }) 
        .catch((error) =>{
            setError(error);
            setLoading(false); // Set loading to false on error
        });
    }, [opts]);  

 

    if (loading) return <div>Loading ...</div>;   //when fetching data takes time loading will set to true and returns this

    if (error) 
        return <div>Error: {error.message}</div>; //shows error if any



    // Check if data exists and contains lifts
    if (!data || !data.data || !data.data.allLifts) {
        return <div>No lifts available.</div>;
    }

   

    return (
        <div>
        { data.data.allLifts.map((lifts) =>(
            <Lift name={lifts.name}  
            key={lifts.name}  // Use a unique key for each lift
            elevationGain ={lifts.elevationGain}
            status={lifts.status}
            />
        )
        )}
        </div>
    );
}