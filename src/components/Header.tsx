import { navItems } from "@/constants";
import Link from "next/link";
import Input from "./Input";

export default function Header() {
  return (
    <header className="flex flex-row justify-between pt-12">
      <Link href="/">
        <h1 className="font-bold text-lg">Coffee & Co</h1>
      </Link>
      <nav className="flex flex-row font-bold gap-6 ">
        {navItems.map((item) => (
          <Link key={item.url} href={item.url}>
            {item.name}
          </Link>
        ))}
        <Input placeholder="Search" type="text" style="" />
      </nav>
    </header>
  );
}
