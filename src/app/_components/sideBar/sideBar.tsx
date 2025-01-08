"use client";
import { useRouter, usePathname } from "next/navigation";
import Copy from "public/icons/copy.svg";
import Email from "public/icons/mail.svg";
import Settings from "public/icons/settings.svg";
import Fragments from "public/icons/fragment.svg";
import User from "public/icons/user.svg";
import GitGub from "public/icons/gitHub.svg";
import { Accordion } from "../accordion/accordion";
import ListAccordion from "../list-Accordion/listAccordion";
import { Accordion as AccordionType } from "@/types/accordion";

const SideBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    {
      route: "/",
      icon: <Copy className="stroke-[#909090] w-6 h-6" />,
      label: "Home",
    },
    {
      route: "/github",
      icon: <GitGub className="stroke-[#909090] stroke-1 w-6 h-6" />,
      label: "GitHub",
    },
    {
      route: "/projects",
      icon: <Fragments className="stroke-[#909090] w-6 h-6" />,
      label: "projects",
    },
    {
      route: "/contact",
      icon: <Email className="stroke-[#909090] w-6 h-6" />,
      label: "contact",
    },
    {
      route: "/about",
      icon: <User className="stroke-[#909090] w-6 h-6" />,
      label: "About",
    },
    {
      route: "/settings",
      icon: <Settings className="stroke-[#909090] w-6 h-6" />,
      label: "Settings",
    },
  ];

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  const faqs: AccordionType[] = [
    {
      id: 1,
      title: "Portfolio",
      content: <ListAccordion />,
    },
  ];

  return (
    <div className="flex h-[calc(100vh-40px-20px)]">
      <div className="bg-[#24292e] z-10 flex flex-col justify-between w-[55px] pt-3  border-r border-[#161a1d]">
        <div className="flex flex-col items-center gap-3 justify-center ">
          {tabs.slice(0, 4).map((tab, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(tab.route)}
              className={`${
                pathname === tab.route && " border-l-2 border-[#007BEC]"
              } flex justify-center items-center  hover:bg-[#1f2428]  w-full h-12 `}
            >
              {tab.icon}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3 justify-center pb-3">
          {tabs.slice(4).map((tab, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(tab.route)}
              className={`${
                pathname === tab.route && "border-l-2 border-[#007BEC]"
              } flex justify-center items-center  hover:bg-[#1f2428]  w-full h-12`}
            >
              {tab.icon}
            </button>
          ))}
        </div>
      </div>
      <div className="sm:flex flex-col pt-2 bg-[#161a1d] hidden w-[200px] pl-2 items-start border-r border-[#161a1d]">
        <h3 className="text-gray-300 text-sm ">Explorer</h3>
        <Accordion data={faqs} />
      </div>
    </div>
  );
};

export default SideBar;
