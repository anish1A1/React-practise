import { useState } from "react";

function useInput(inputvalue){
    // Return an object with value and onChange event, plus a reset function
    const [value, setValue] = useState(inputvalue);
    return [
        {
            value,
          onChange : (e) => setValue( e.target.value)
        },
        () => setValue(inputvalue)  // cleanup function to set the value back to inputvalue
    ];
}


export default function Displaycolor(){

    const [titleProp, resetTitle] = useInput('');
    const [colorProp , resetColor] = useInput('#000000');

    const submit = (e) =>{
        e.preventDefault();  //prevent forms default submission
        alert(`${titleProp.value}, ${colorProp.value}`);
        resetColor();  //Resets the inputs
        resetTitle();
 
    };
    return (
        <form onSubmit = {submit}>
        <input {...titleProp}  
        //spreads the properties of titleProp and colorProp into the 
        //input elements.       //titleProp is the parameter of useInput
        // for titleProp, it spreads {value, onChange : e => setValue(e.target.value)}

        //This binds the input's value and change handler directly into the 
        //input element, making it concise and clean.

        type="text" placeholder ="color title"
       
        // Think of the spread operator as a way to unpack the values of titleProp asd colorProp into the input attributes,
        // making it concise and clean
        />
        

        <input  {...colorProp} 
        type="color"
       />

        <button type="submit"> Add </button>
       </form>
    );
}