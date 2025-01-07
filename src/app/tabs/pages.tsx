"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TabsProps } from "./tabs.types";

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const currentTabIndex = tabs.findIndex((tab) => tab.route === pathname);
    if (currentTabIndex !== -1) {
      setActiveTab(currentTabIndex);
    }
  }, [pathname, tabs]);

  const handleTabClick = (index: number, route: string) => {
    setActiveTab(index);
    router.push(route);
  };

  return (
    <div className="tabs flex flex-col w-full">
      <div className="tab-labels flex w-full bg-[#1f2428]">
        {tabs.map((tab, index) => (
          <div
            key={`tab-${index}`}
            onClick={() => handleTabClick(index, tab.route)}
            className={`tab-label ${
              index === activeTab ? "bg-[#2d333b]" : ""
            } text-gray-300 text-[10px] sm:text-[16px] p-2 sm:py-2 sm:px-4 border-r border-[#24292e] cursor-pointer`}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content flex-grow p-4 bg-[#2d333b] text-gray-200">
        {typeof tabs[activeTab].content === "string" ? (
          <div
            dangerouslySetInnerHTML={{
              __html: tabs[activeTab].content as string,
            }}
          />
        ) : (
          tabs[activeTab].content
        )}
      </div>
    </div>
  );
};
