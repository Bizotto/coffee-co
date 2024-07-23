import Image from "next/image";
import Input from "./Input";

export default function Hero() {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="grid grid-rows-2">
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
        </div>
        <form className="gap-6 max-w-xs flex flex-col ">
          <div className="flex flex-col">
            <p className="font-bold">Name</p>
            <Input
              placeholder="Name"
              className="focus:outline-none border-stone-500/50 border"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">E-mail</p>
            <Input
              className="focus:outline-none border-stone-500/50 border"
              placeholder="E-Mail"
              type="text"
            />
          </div>
          <button
            className="rounded-full border border-stone-500/50 p-2 hover:bg-stone-600/20 transition-all duration-300"
            type="submit"
          >
            Enroll
          </button>
        </form>
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
