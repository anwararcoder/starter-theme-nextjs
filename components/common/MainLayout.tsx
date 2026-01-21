"use client";
import Navbar from "../navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>footer</footer>
    </>
  );
};

export default MainLayout;
