import logo from "../assets/logo.jpg";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <img src={logo} width={200} className="my-20" />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        <FaPhone className="inline text-gray-400 mr-1" />
        <a href="tel:+251978621451" className="text-gray-400">
          +251978621451
        </a>
      </p>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;CompileTab.All rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
