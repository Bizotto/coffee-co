import { navItems } from "@/constants";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justify-between pt-12">
      <h1 className="font-bold text-lg">Coffee & Co</h1>
      <nav className="flex flex-row font-bold gap-6 ">
        {navItems.map((item) => (
          <Link key={item.url} href={item.url}>
            {item.name}
          </Link>
        ))}
        <input className="rounded-full bg-stone-200 px-2" type="text" />
      </nav>
    </header>
  );
}
