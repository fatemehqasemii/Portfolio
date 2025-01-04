import "./globals.css";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import SideBar from "./_components/sideBar/sideBar";
import { Tabs } from "./_components/tabs/tabs";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabs: Tab[] = [
    {
      label: (
        <span className="flex items-center gap-1">
          <ReactIcon className=" w-4 h-4 stroke-none " />
          home.jsx
        </span>
      ),
      route: "/",
      content: <Home />,
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <HTMLIcon className=" w-4 h-4 stroke-none " />
          about.html
        </span>
      ),
      route: "/about",
      content: <About />,
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <CSS className=" w-4 h-4 stroke-none" />
          contact.css
        </span>
      ),
      route: "/contact",
      content: <Contact />,
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <JS className="stroke-none w-[14px] h-[14px]" />
          project.js
        </span>
      ),
      route: "/projects",
      content: <Project />,
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <Markdown className="stroke-none w-[14px] h-[14px]" />
          github.md
        </span>
      ),

      route: "/github",
      content: <GitHub />,
    },
  ];
  return (
    <html lang="en">
      <body className="bg-[#24292e] relative flex flex-col">
        <Header />
        <div className=" flex flex-col">
          <div className="flex h-[calc(100vh-40px-20px)]">
            <SideBar />
            <Tabs tabs={tabs} />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
