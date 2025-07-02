import Image from "next/image";
import logo from "@/public/logo-white-bg.png";
import Link from "next/link";
import NavLink from "./NavLink";
export default function Header() {
  return (
    <nav className='p-3 m-3 flex flex-row gap-15'>
      <Link href='/'>
        <Image
          src={logo}
          alt='SPS logo'
          width='150'
          height='auto'
          priority
        />
      </Link>
      <NavLink href='new-LR'>New Entry</NavLink>
      <NavLink href='/community'>Loading Sheet</NavLink>
    </nav>
  );
}
