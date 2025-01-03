import React from "react";

export type Tab = {
  label: string | React.ReactNode;
  route: string;
  content: string | React.ReactNode;
};
