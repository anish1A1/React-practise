// eslint-disable-next-line react/prop-types
export default function GitUser( {name, location, avatar, height }){
    
        const styling = {
            "fontSize" : 40,
            "color" : "#000000",

        };
    return (
    <div>
        <h1 style={styling}>{name}</h1>
        <p style={styling}>{location}</p>
        <img src={avatar} alt={name} height={height} />
    </div>
    );

}
