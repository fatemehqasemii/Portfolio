import Link from "next/link";
import React from "public/icons/react.svg";
import CSS from "public/icons/css.svg";
import HTMLIcon from "public/icons/html.svg";
import JS from "public/icons/js.svg";
import GitHub from "public/icons/copy.svg";

const ListAccordion: React.FC = () => {
  return (
    <div className=" flex flex-col">
      <Link href={"/"} className="flex ">
        <React className="stroke-[#909090] w-3 h-3" />
        home.jsx
      </Link>
      <Link href={"/"}>
        <HTMLIcon className="stroke-[#909090] w-3 h-3" />
        about.html
      </Link>
      <Link href={"/"}>
        <CSS className="stroke-[#909090] w-3 h-3" />
        content.css
      </Link>
      <Link href={"/"}>
        <JS className="stroke-[#909090] w-3 h-3" />
        projects.js
      </Link>
      <Link href={"/"}>
        <GitHub className="stroke-[#909090] w-3 h-3" />
        github.md
      </Link>
    </div>
  );
};
export default ListAccordion;
