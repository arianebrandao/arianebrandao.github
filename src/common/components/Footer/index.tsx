import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-5 text-center">
      <p data-testid="name">Ariane Brandão © 2022</p>
      <p data-testid="technologies">
        Made with 💕 (also{" "}
        <Link href="https://www.linkedin.com/in/ariane-brand%C3%A3o">
          <a target="_blank">Bulma</a>
        </Link>
        {", "}
        <Link href="https://graphcms.com">
          <a target="_blank">GraphCMS</a>
        </Link>{" "}
        and{" "}
        <Link href="https://nextjs.org">
          <a target="_blank">NextJS</a>
        </Link>
        ){" "}
      </p>
      <p data-testid="host">
        Hosted by{" "}
        <Link href="https://pages.github.com/">
          <a target="_blank">Github Pages</a>
        </Link>
      </p>
    </footer>
  );
}
