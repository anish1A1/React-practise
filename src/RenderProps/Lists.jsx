

export default function Lists(
    // eslint-disable-next-line react/prop-types
    {data, renderItem, renderEmpty}
){
    // eslint-disable-next-line react/prop-types
    return !data.length ? (<p>{renderEmpty}</p>
 ) : 
 (
       
    // eslint-disable-next-line react/prop-types
    <ul> {data.map((item) => (
            <li key={item.name}>
                {renderItem(item)}
            </li>
        ))}
    </ul>
    );

}