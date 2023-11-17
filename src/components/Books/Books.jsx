import BooksItem from '../BooksItem/BooksItem';

export default async function Books() {
  const books = await getBooks();

  return (
    <>
      <h2>Список книг художественной литературы</h2>
      <ul>
        {books.map((book) => (
          <BooksItem book={book} key={book.id} />
        ))}
      </ul>
    </>
  );
}
