import Link from "next/link";
import React from "public/icons/react.svg";
import CSS from "public/icons/css.svg";
import HTMLIcon from "public/icons/html.svg";
import JS from "public/icons/js.svg";
import Markdown from "public/icons/markdown.svg";

const ListAccordion: React.FC = () => {
  return (
    <div className=" flex flex-col text-gray-300 text-sm gap-3 pl-2">
      <Link href={"/"} className="flex items-center gap-2 ">
        <React className="stroke-none w-4 h-4" />
        home.jsx
      </Link>
      <Link href={"/about"} className="flex items-center gap-2 ">
        <HTMLIcon className=" w-4 h-4 stroke-none " />
        about.html
      </Link>
      <Link href={"/contact"} className="flex items-center gap-2 ">
        <CSS className=" w-4 h-4 stroke-none" />
        contact.css
      </Link>
      <Link href={"/projects"} className="flex items-center gap-2 ">
        <JS className="stroke-none w-[14px] h-[14px]" />
        projects.js
      </Link>
      <Link href={"/github"} className="flex items-center gap-2 ">
        <Markdown className="stroke-none w-[14px] h-[14px]" />
        github.md
      </Link>
    </div>
  );
};
export default ListAccordion;
