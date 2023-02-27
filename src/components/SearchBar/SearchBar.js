export function SearchBar( {selection} ) {
    return (<div>
        <input onChange={(e) => selection(e.target.value)}></input>
    </div>)
}