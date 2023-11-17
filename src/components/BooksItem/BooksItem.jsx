import Image from 'next/image';
import Link from 'next/link';

export default function BooksItem({ book }) {
  return (
    <>
      <li>
        <Link>
          <Image
            src={book.src}
            width={100}
            height={150}
            alt={`Изображение книги ${book.title}`}
          />
        </Link>
        <span>{book.title}</span>
        <span>{book.author}</span>
      </li>
    </>
  );
}
