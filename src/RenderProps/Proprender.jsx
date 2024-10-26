import Lists from "./Lists";


const dataset = [
    { name: "Mount Everest", elevation: 8848 },
    { name: "K2", elevation: 8611 },
    { name: "Kangchenjunga", elevation: 8586 },
    { name: "Lhotse", elevation: 8516 },
    { name: "Makalu", elevation: 8485 }
];



export default function Proprender(){



    return(
        <div>
            <Lists data={dataset} renderEmpty={"There are no items to display"}
            renderItem={(value) => <>
                <p>{value.name}  -  {value.elevation} ft</p> 
            </>}  />
        </div>

    );
}