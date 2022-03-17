import Link from "next/link";
import {
  FaGithubAlt,
  FaTwitterSquare,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div>
      <span className="icon-text">
        <Link href="http://twitter.com/ariplaymad">
          <a target="_blank">
            <FaTwitterSquare className="icon has-text-white mx-4" />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/ariane-brand%C3%A3o">
          <a target="_blank">
            <FaLinkedin className="icon has-text-white mx-4" />
          </a>
        </Link>

        <Link href="https://github.com/arianebrandao">
          <a target="_blank">
            <FaGithubAlt className="icon has-text-white mx-4" />
          </a>
        </Link>

        <Link href="mailto:arii.brandao@gmail.com">
          <a target="_blank">
            <FaEnvelope className="icon has-text-white mx-4" />
          </a>
        </Link>
      </span>
    </div>
  );
}
