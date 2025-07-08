
import Image from "next/image";
import logo from "@/public/logo-white-bg.png";
import Link from "next/link";

import SearchBar from "./SearchBar";
export default function Header({ onSearch }) {
  

  return (
    <header className="sticky top-0 z-30 w-full bg-gradient-to-r from-[#1b1b1b] via-[#222] to-[#1b1b1b] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            {/* <Image src={logo} alt="SPS logo" width={40} height={40} priority className="rounded-full" /> */}
            <span className="text-xl font-semibold tracking-wide text-gray-100 hidden sm:inline">
              Shiv Parcel Service
            </span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex flex-1 justify-center gap-6">
            <Link href="/new-LR" className="text-gray-300 hover:text-[#e87f05] transition-colors">New Entry</Link>
            <Link href="/all-lr" className="text-gray-300 hover:text-[#e87f05] transition-colors">All LR</Link>
            <Link href="/community" className="text-gray-300 hover:text-[#e87f05] transition-colors">Loading Sheet</Link>
          </div>

          {/* Search */}
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </header>
  );
}
