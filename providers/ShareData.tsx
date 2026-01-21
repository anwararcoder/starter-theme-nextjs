"use client";

import React, { createContext, useContext, useState } from "react";

interface ShareDataContextType {
  openNavbarLinks: boolean;
  toggleNavbarLinks: () => void;
}

const ShareDataContext = createContext<ShareDataContextType | undefined>(
  undefined,
);

export const ShareDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openNavbarLinks, setOpenNavbarLinks] = useState(false);

  const toggleNavbarLinks = () => setOpenNavbarLinks((prev) => !prev);

  return (
    <ShareDataContext.Provider
      value={{
        openNavbarLinks,
        toggleNavbarLinks,
      }}
    >
      {children}
    </ShareDataContext.Provider>
  );
};

export const useShareData = () => {
  const context = useContext(ShareDataContext);
  if (!context)
    throw new Error("useShareData must be used within a ShareDataProvider");
  return context;
};
