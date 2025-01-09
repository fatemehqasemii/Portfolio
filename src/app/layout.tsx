import "./globals.css";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import { Tabs } from "./tabs/pages";
import { Tab } from "@/types/tab.type";
import HTMLIcon from "public/icons/html.svg";
import CSS from "public/icons/css.svg";
import Markdown from "public/icons/markdown.svg";
import JS from "public/icons/js.svg";
import ReactIcon from "public/icons/react.svg";
import About from "./about/page";
import Contact from "./contact/page";
import Project from "./projects/page";
import GitHub from "./github/page";
import Home from "./page";
import SideBar from "./_components/sideBar/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabs: Tab[] = [
    {
      label: (
        <span className="flex items-center gap-1">
          <ReactIcon className=" w-4 h-4 stroke-none hidden md:flex" />
          home.jsx
        </span>
      ),
      route: "/",
      content: <Home />,
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <HTMLIcon className=" w-4 h-4 stroke-none hidden md:flex " />
          about.html
        </span>
      ),
      route: "/about",
      content: <About />,
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <CSS className=" w-4 h-4 stroke-none hidden md:flex" />
          contact.css
        </span>
      ),
      route: "/contact",
      content: <Contact />,
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <JS className="stroke-none hidden md:flex w-[14px] h-[14px]" />
          project.js
        </span>
      ),
      route: "/projects",
      content: <Project />,
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <Markdown className="stroke-none hidden md:flex w-[14px] h-[14px]" />
          github.md
        </span>
      ),

      route: "/github",
      content: <GitHub />,
    },
  ];
  return (
    <html lang="en">
      <body className="bg-[#24292e]  flex flex-col">
        <Header />
        <div className=" flex flex-col">
          <div className="flex h-[calc(100vh-40px-20px-8px)]">
            <SideBar />
            <Tabs tabs={tabs} />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
