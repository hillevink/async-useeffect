
const Search = ({handleSearch, search, handleInput}) => {

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={search} onChange={handleInput} />
      <button type="submit">Søk</button>
    </form>
  )
}

export default Search;