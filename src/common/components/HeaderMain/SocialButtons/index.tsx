import Link from "next/link";
import {
  FaGithubAlt,
  FaTwitterSquare,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="flex justify-center my-2">
      <Link href="http://twitter.com/ariplaymad">
        <a target="_blank">
          <FaTwitterSquare className="mx-4 text-purple-10 hover:text-white" />
        </a>
      </Link>

      <Link href="https://www.linkedin.com/in/ariane-brand%C3%A3o">
        <a target="_blank">
          <FaLinkedin className="mx-4 text-purple-10 hover:text-white" />
        </a>
      </Link>

      <Link href="https://github.com/arianebrandao">
        <a target="_blank">
          <FaGithubAlt className="mx-4 text-purple-10 hover:text-white" />
        </a>
      </Link>

      <Link href="mailto:arii.brandao@gmail.com">
        <a target="_blank">
          <FaEnvelope className="mx-4 text-purple-10 hover:text-white" />
        </a>
      </Link>
    </div>
  );
}
