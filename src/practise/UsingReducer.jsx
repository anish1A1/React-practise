import { useEffect, useReducer } from "react"

function UsingReducer() {
    
    //An alternative to useState having complex logic
    const [checked, setUnchecked] = useReducer((checked) => !checked, false)

    
    
    // useEffect does not re-render as value (checked) changes
    useEffect(() => console.log(`the value has changed ${checked}`), [checked])
    return(
        <>
        <input type="checkbox" 
        value={checked}
        onChange={() => setUnchecked()}

        />
            <label >
                {checked ? "Checked" : "Unchecked"}
            </label>
        </>

    )
}
export default UsingReducer;