import Hero from "@/components/Hero";
import { images } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-12">
      <Hero />
      <div className="bg-stone-800/30 h-[0.5px]" />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-10">
          {images.map((image, index) => (
            <Link key={image.url} href={image.url}>
              <Image
                key={index}
                className="shadow-lg shadow-black rounded-lg"
                alt={image.alt}
                src={image.src}
                width={400}
                height={400}
              />
              <p className="bg-stone-300 absolute -mt-[30px] rounded-bl-lg p-[2px]">
                {image.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
