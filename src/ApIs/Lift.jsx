import PropTypes from 'prop-types'

export default function Lift({
   
    // eslint-disable-next-line react/prop-types
    name,  elevationGain,  status
}) {
    const styling = {
        fontSize: 10,
        color: "#000000",
        
    };

    return (
        <div style={styling}>
            <h1>{name}</h1>
            <p>{elevationGain} , {status}</p>
        </div>
    );
}

//we can also set the datatype and fields required in the code by using propTypes

Lift.propTypes = {
    name: PropTypes.string.isRequired,
    elevationGain: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
}