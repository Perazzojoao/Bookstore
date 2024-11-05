'use client';

import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState('');
  return ( 
    <div className="w-full px-4 sm:px-0">
      <input type="text" placeholder="Estou procurando por..." className="w-full px-4 py-2 rounded-lg text-zinc-800 placeholder:text-zinc-800" onChange={(e) => setSearch(e.target.value)}/>
    </div>
  );
}
 
export default SearchBar;