function SearchBar ({search, updateSearch}){
    return(
       <input type="text" value={search} onChange={updateSearch} placeholder="Search product"/>
    )
}

export default SearchBar