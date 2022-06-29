import Link from "next/link";
import Image from "next/image";
import { request } from "graphql-request";
import { useEffect, useState } from "react";

import SocialButtons from "./SocialButtons";
import { Navbar } from "../Navbar";

export default function HeaderMain() {
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchDescription = async () => {
      const { page } = await request(
        'https://api-sa-east-1.graphcms.com/v2/cl0b4y0pb2yvs01z791pmg63e/master',
        `
        {
          page(where: {id: "cl1qka88x0aoq0alymb1aufw6"}) {
            heroDescription {
              html
            }
          }
        }
      `
      );

      setDescription(page.heroDescription.html);
    };

    fetchDescription();
  }, []);

  return (
    <header className="bg-brand-500 py-5 h-80">
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
          <span
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <SocialButtons />
        </div>
      </section>
    </header>
  );
}
