"use client";
import React, { useState } from "react";
import { TabsProps } from "./tabs.types";
import Link from "next/link";

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="tabs flex flex-col">
      <div className="tab-labels">
        {tabs.map((tab, index) => (
          <Link
            key={`tab-${index}`}
            href={tab.route}
            className={`tab-label ${index === activeTab ? "tab-active" : ""}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          className="tab-content"
          key={`tab-content-${index}`}
          style={{ display: activeTab !== index ? "none" : "block" }}
        >
          {typeof tab.content === "string" ? (
            <div
              dangerouslySetInnerHTML={{
                __html: tab.content as TrustedHTML,
              }}
            />
          ) : (
            tab.content
          )}
        </div>
      ))}
    </div>
  );
};
