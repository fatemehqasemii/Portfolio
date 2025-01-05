"use client";
import Copy from "public/icons/copy.svg";
import Email from "public/icons/mail.svg";
import Settings from "public/icons/settings.svg";
import Fragments from "public/icons/fragment.svg";
import User from "public/icons/user.svg";
import GitGub from "public/icons/gitHub.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Accordion } from "../accordion/accordion";
import ListAccordion from "../list-Accordion/listAccordion";
import { Accordion as AccordionType } from "@/types/accordion";

const SideBar: React.FC = () => {
  const pathname = usePathname();
  const isActive = pathname === "/";
  const faqs: AccordionType[] = [
    {
      id: 1,
      title: "Portfolio",
      content: <ListAccordion />,
    },
  ];
  return (
    <div className="flex h-[calc(100vh-40px-20px)]">
      <div className="bg-[#24292e] flex flex-col justify-between w-[55px] ">
        <div className="flex flex-col items-center gap-6 justify-center pt-3">
          <Link
            href={""}
            className={`${
              isActive && "border-l border-[#007BEC]"
            } hover:bg-slate-700`}
          >
            <Copy className="stroke-[#909090] w-6 h-6" />
          </Link>
          <Link href={""}>
            <GitGub className="stroke-[#909090] stroke-1 w-6 h-6" />
          </Link>
          <Link href={""}>
            <Fragments className="stroke-[#909090] w-6 h-6" />
          </Link>
          <Link href={""}>
            <Email className="stroke-[#909090] w-6 h-6" />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-6 justify-center pb-3">
          <Link href={""}>
            <User className="stroke-[#909090] w-6 h-6" />
          </Link>

          <Link href={""}>
            <Settings className="stroke-[#909090] w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="sm:flex flex-col pt-2 bg-[#161a1d]  w-[200px] pl-2 items-start  border-r border-[#161a1d]">
        <h3 className="text-gray-300 text-sm ">Explorer</h3>
        <Accordion data={faqs} />
      </div>
    </div>
  );
};
export default SideBar;
