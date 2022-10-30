import {useEffect, useState} from "react";
import Movies from "./Movies";
import Search from "./Search";

const Main = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=Star%20Wars&apikey=e03a1442')
      .then((response) => response.json())
      .then((data) => {setMovies(data.Search.splice(0,5))})
      .catch((err) => console.log(err))
  }, [])

  const handleInput = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    if (search) {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=e03a1442`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search))
      .catch((err) => console.log(err))
    }
  }

  return (
    <main>
      <Search handleSearch={handleSearch} search={search} handleInput={handleInput} />
      <Movies movies={movies} setMovies={setMovies} />
    </main>
  )
}

export default Main;