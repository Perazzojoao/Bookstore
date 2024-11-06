'use client'
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface SearchBookProviderProps {
  children: React.ReactNode;
}

interface SearchBookContextProps {
  searchTitle: string;
  setSearchTitle: Dispatch<SetStateAction<string>>
}

export const SearchBookContext = createContext({} as SearchBookContextProps);
SearchBookContext.displayName = 'SearchBookContext';

const SearchBookProvider = ({ children }: SearchBookProviderProps) => {
  const [searchTitle, setSearchTitle] = useState('');
  return (
    <SearchBookContext.Provider value={{ searchTitle, setSearchTitle }}>
      {children}
    </SearchBookContext.Provider>
  );
}

export default SearchBookProvider;