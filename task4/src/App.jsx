import { useEffect, useState } from "react"

export default function App() {
  const [books, setBooks] = useState([])
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    fetch("http://localhost:5500/books")
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])

  const filteredBooks = books.filter(book => {
    if (filter === "bc") return book.releaseYear < 0
    if (filter === "ac") return book.releaseYear > 0
    return true
  })

  return (
    <div>
  <h1>Books</h1>

  <label>
<input
type="radio"
name="filter"
onChange={() => setFilter("bc")}
  />
BC
  </label>

  <label>
<input
type="radio"
name="filter"
onChange={() => setFilter("ac")}
  />
AC
  </label>

  <label>
<input
type="radio"
name="filter"
onChange={() => setFilter("all")}
  />
ALL
  </label>

  {filteredBooks.map(book => (
    <div key={book.id}>
      <h2>{book.title}</h2>
      <ul>
       <li>Author: {book.author}</li>
       <li>Release date: {book.releaseYear}</li>
       <li>Pages: {book.pages}</li>
      </ul>
    </div>
  ))}
  </div>

  )
  
}


