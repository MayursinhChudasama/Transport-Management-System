"use client";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

/**
 * SearchBar component
 * Props:
 *   onSearch(query: string)     // called on form submit with trimmed query
 *   placeholder?                // optional placeholder text
 *   className?                  // tailwind classes passed to the <form>
 */
export default function SearchBar({ onSearch, placeholder = "Search...", className = "" }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    onSearch?.(trimmed);
  }

  return (
    <form onSubmit={handleSubmit} className={`relative w-full max-w-xs ml-auto ${className}`}>
      <input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded bg-[#2a2a2a] placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#e87f05]"
      />
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
    </form>
  );
}
