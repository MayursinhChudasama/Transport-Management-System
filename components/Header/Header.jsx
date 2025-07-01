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
          width='300'
          height='150'
        />
      </Link>
      <NavLink href='/new-LR'>New LR</NavLink>
      <NavLink href='/community'>Loading Sheet</NavLink>
    </nav>
  );
}
