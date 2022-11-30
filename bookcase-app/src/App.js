import React, { useState } from "react";

import Book from "./components/Book";
import data from "./models/books.json";

function App() {
  // const books = data
  const [books] = useState(data);

  return <div>
  <h1>Tammy's library</h1>
  {books.map((book) => <Book key={book.id} book={book} />)}
  </div>
}

return (
  <Booklist>
    {book.map((item)=> (
      <Book key={item.id} book={book}/>
    
    ))}

    <h1> Tammy was here below copy paste</h1>
  </Booklist>
)

function Booklist(props) {
  return(
    <div>
      <h1>Tammy's Library</h1>
      <div classname = "booklist-container">{props.children}</div>
      </div>
    </div>
  )
}

export default App;

