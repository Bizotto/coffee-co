import Image from "next/image";
import Input from "./Input";

export default function Hero() {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="gap-6 flex flex-col">
        <h1>
          <span className="text-3xl font-bold">Coffee & Co</span>
        </h1>
        <p className="text-3xl font-bold">
          From people who loves coffee, to coffee lovers.
        </p>
        <p className="text-2xl font-bold">
          Your place to learn, share & innovate about coffee!
        </p>
        <Input placeholder="Name" className="" type="text" />
      </div>
      <Image
        className="rounded-xl shadow-lg shadow-black"
        alt="Various types of coffee"
        src="/assets/CoffeeHero.jpeg"
        width={500}
        height={500}
      />
    </div>
  );
}
