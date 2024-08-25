import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <section className="py-10 bg-black dark:bg-green-950  z-50 dark:drop-shadow-lg dark:shadow-green-500/50">
      <div className="max-w-2k w-full mx-auto flex flex-col items-center ">
        <h2 className=" font-bold mb-4">Get in touch with me.</h2>
        <div className="flex space-x-4">
          <Link
            href={"https://wa.me/94769602283"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
          >
            <FaWhatsapp size={24} />
          </Link>
          {/* <Link
            href="#"
            className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="#"
            className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
          >
            <FaFacebookF size={24} />
          </Link> */}
          <Link
            href="https://www.linkedin.com/in/yashithasahan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
          >
            <FaLinkedinIn size={24} />
          </Link>
          <Link
            href="https://github.com/yashithasahan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Footer;
