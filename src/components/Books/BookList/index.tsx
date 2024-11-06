'use client'

import { SearchBookContext } from "@/context/search_books.contex";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const BookList = () => {
  const { searchTitle } = useContext(SearchBookContext);
  const router = useRouter();

  useEffect(() => {
    if (searchTitle === '') {
      router.push('/');
    }
  }, [searchTitle, router]);

  return (
    <div>
      BookList
      <p>Search Title: {searchTitle}</p>
    </div>
  );
}

export default BookList;