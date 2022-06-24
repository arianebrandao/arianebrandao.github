import Link from "next/link";
import Image from "next/image";

import SocialButtons from "./SocialButtons";
import { Navbar } from "../Navbar";

interface HeaderMainProps {
  heroDescription: string;
}

export default function HeaderMain({ heroDescription }: HeaderMainProps) {
  return (
    <header className="bg-brand-500 py-5">
      <Navbar />
      <section className="container mx-auto">
        <div className="text-center">
          <Link href="/about">
            <a>
              <figure className="h-12 w-12">
                {/* <Image
                    className="rounded-sm"
                    alt="Ariane Brandao profile picture"
                    src="https://github.com/arianebrandao.png"
                    layout="fill"
                  /> */}
              </figure>
            </a>
          </Link>
          <h2 className="text-purple-10 text-4xl">Ariane Brandão</h2>
          <p
            className=""
            dangerouslySetInnerHTML={{
              __html: heroDescription,
            }}
          />
          <SocialButtons />
        </div>
      </section>
    </header>
  );
}
