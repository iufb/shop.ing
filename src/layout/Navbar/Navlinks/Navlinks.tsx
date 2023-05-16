import { navlinks } from "@/utils/constants";
import { NavlinksProps } from "./Navlinks.props";
import Link from "next/link";

export const Navlinks = ({
  className,
  ...props
}: NavlinksProps): JSX.Element => {
  return (
    <div className={`${className} flex flex-col lg:flex-row `} {...props}>
      {navlinks.map((link) => (
        <Link
          href={link.path}
          key={link.link}
          className={`uppercase lg:ml-2 ${
            link.link == "market" && "textFlow font-bold"
          } lg:text-xl    text-md hover:text-blue-500 hover:underline underline-offset-4`}
        >
          {link.link}
        </Link>
      ))}
    </div>
  );
};
