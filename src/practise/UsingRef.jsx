import {useRef} from 'react';
export default function UsingRef() {
    
    const textColor = useRef();
    const picColor = useRef(); 
    const submit = (e) =>{
        //This will stop page from refreshing
        e.preventDefault();
        console.log(picColor);
        const text = textColor.current.value;
        const color = picColor.current.value;
        alert(`${text}, and ${color}`);

        //This will set the value to null after displaying data when clikced Add
        textColor.current.value = "";
        picColor.current.value = "";

    }
    return(
        <form onSubmit = {submit}>
        <input type="text" placeholder ="color title" ref = {textColor}/>

        <input type="color" ref={picColor} />

        <button> Add </button>
       </form>
    )
}