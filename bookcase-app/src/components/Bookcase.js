import { Book } from './Book';

export const Bookcase = ({books}) => {

  function addBook () {
  console.log("hello")
  };

  return (
    <div>
        <h2>{books.length}</h2>
        {books.map((book) => book.volumeInfo.title) }
        {books.map((book) => (              <Book
                key={book.id}
                book={book}
                handleClick={() => addBook(book)}
              />
)) }


    </div>
  );
};