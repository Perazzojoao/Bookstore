'use client';

import { SearchBookContext } from "@/context/search_books.contex";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useState } from "react";

interface SearchBarProps {
  defaultSearch?: string;
}

const SearchBar = ({ defaultSearch = '' }: SearchBarProps) => {
  const [search, setSearch] = useState(defaultSearch);
  const { setSearchTitle } = useContext(SearchBookContext);
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchTitle(search);
    router.push('/books');
  }

  return (
    <div className="w-full px-4 sm:px-0">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Estou procurando por..." defaultValue={search} className="w-full px-4 py-2 rounded-lg text-zinc-800 placeholder:text-zinc-800" onChange={(e) => setSearch(e.target.value)} />
      </form>
    </div>
  );
}

export default SearchBar;