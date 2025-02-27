"use client";
import React, { useContext, useState } from "react";
import { ClobalContext } from "@/app/context/Context";
import { SearchIcon } from "../_atoms";
import { FilterX } from "lucide-react";

function Search() {
  const [searchMode, setSearchMode] = useState(false);
  const context = useContext(ClobalContext);
  if (!context) return;
  const { search, setSearch, setData, copiedData } = context;

  const getInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search) {
      setData(
        (copiedData || []).filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
      setSearch("");
      setSearchMode(!searchMode);
    } else {
      setData(copiedData || []);
      setSearchMode(searchMode);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full px-[3%] lg:px-[7%] py-2 md:w-[40%] lg:w-[50%] relative flex items-center"
    >
      <SearchIcon />
      <input
        onChange={getInputSearch}
        className="pl-10  py-1.5 rounded-l-md outline-none flex-grow  border border-[#dfdcdc]"
        type="text"
        value={search}
      />
      <button
        type="submit"
        className="outline-none px-4 py-2 text-sm bg-gradient-to-b from-green-500 to-yellow-300 
      border border-yellow-300 rounded-r-md
      focus:outline-none focus:ring-2 focus:ring-yellow-300 active:from-yellow-300"
      >
        {!search ? <span>Search</span> : <FilterX className="w-5 h-5" />}
      </button>
    </form>
  );
}

export default Search;
