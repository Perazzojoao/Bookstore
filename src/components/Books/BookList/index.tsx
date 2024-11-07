'use client'

import BookContainer from "@/components/BookContainer";
import { SearchBookContext } from "@/context/search_books.contex";
import { api } from "@/lib/api";
import { Item } from "@/types/api.type";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const BookList = () => {
  const { searchTitle } = useContext(SearchBookContext);
  const [books, setBooks] = useState<Item[]>([]);
  const router = useRouter();

  async function fetchBooks() {
    try {
      const response = await api.get('/', {
        params: {
          q: `intitle:${searchTitle}`,
        }
      });
      setBooks(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (searchTitle === '') {
      router.push('/');
    }
    fetchBooks();
  }, [searchTitle, router]);

  return (
    <div>
      {books.map((book) => (
        <BookContainer key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;