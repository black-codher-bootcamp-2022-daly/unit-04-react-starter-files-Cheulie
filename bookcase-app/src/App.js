import React, { useState } from "react";
import Booklist from "./components/Booklist";
import {Bookcase} from "./components/Bookcase";
import {Search} from "./components/Search";
import { Book } from "./components/Book";
import data from "./models/books.json";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  // const books = data
  const [books, setBooks] = useState(data); 
  const [keyword, setKeyword] = useState('');
  const [basket, setBasket] =useState([]);


  const favoBook = books[4];

  function addBook(id) {
    console.log('click happened to id: ' + id)
  }

  async function findBooks(value) {
		const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

  	const results = await fetch(url).then(res => res.json());
   if (!results.error) {
     setBooks(results.items);
   }
}

function addBook(book) {
  const newBasket= basket;
  newBasket.push(book);
  setBasket(newBasket);
}

return (
  <>
    <Routes>
      <Route
        path="/Search"
        element={
          <Booklist>
            <Search
              keyword={keyword}
              setKeyword={setKeyword}
              handleSubmit={findBooks}
            />
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleClick={() => addBook(book)}
              />
            ))}
          </Booklist>
        }
      ></Route>
      <Route path="/AboutUs" element={<h1>About us</h1>}></Route>
      <Route path="/Bookcase" element={<Bookcase books={basket}/>}></Route>
    </Routes>
  </>
);
}
//   return (
//     <Booklist>
//       <Search keyword ={keyword} 
//       setKeyword={setKeyword} 
//       findBooks ={findBooks}
//       />

//       <Book handleClick={addBook} id={favoBook.id} title={favoBook.volumeInfo.title} book={favoBook} />

//       {books.map((item) => (
//            <Book handleClick={addBook}
//             id={item.id} 
//             title={item.volumeInfo.title} book={item}/>

//       ))}
//     </Booklist>
//   );
// }

// //<Route path="/AboutUs" element={<h1>About us</h1>}></Route>
// //<Route path="/Bookcase" element={<Bookcase book={basket}/>}></Route>


// function Booklist(props) {
//   return (
//     <div>
//       <h1>Tammy's library</h1>
//       <div className="booklist-container">{props.children}</div>
//     </div>
//   );
// }

export default App;