import "./header-item.style.css";
import { Link } from "react-scroll";

interface HeaderItemProps {
  title: string;
  link: string;
}

export const HeaderItem = ({ title, link }: HeaderItemProps) => {
  return (
    <p className={`item`}>
      <Link
        className={`text-blue-950 hover:text-blue-900`}
        to={link}
        smooth={true}
        duration={500}
      >
        {title}
      </Link>
    </p>
  );
};
