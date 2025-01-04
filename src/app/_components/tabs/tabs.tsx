"use client";
import React, { useState } from "react";
import { TabsProps } from "./tabs.types";
import Link from "next/link";

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs flex flex-col w-full">
      <div className="tab-labels flex overflow-x-auto w-full bg-[#1f2428]">
        {tabs.map((tab, index) => (
          <Link
            key={`tab-${index}`}
            href={tab.route}
            className={`tab-label ${
              index === activeTab ? "bg-[#2d333b]" : ""
            } text-gray-300 text-[10px] sm:text-[16px] p-2 sm:py-2 sm:px-4 border-r border-[#24292e]`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(index);
            }}
          >
            {tab.label}
          </Link>
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
