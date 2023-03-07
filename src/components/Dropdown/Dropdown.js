import './Dropdown.css'

export function Dropdown( {list , label, id, selection} ) {

    return (<div className="dropdown">
        <label htmlFor={id}>{label}</label>     
        <div className="dropdown-content">
            <select id={id} onChange={(e) => selection(e.target.value)}>
                {list.map(function(e){
                    return <option key={e}>{e}</option>;
                })}
            </select>
        </div>
    </div>)
}