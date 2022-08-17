import { useEffect } from "react";
import { GlobalContextWrapper } from "./ContextWrapper";
import { ModalContents } from "./ModalContents";
import { NavBar } from "./Navbar";
import { SideBar } from "./Sidebar";

export const ContextPage = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <GlobalContextWrapper>
      <NavBar />
      <SideBar />
      <ModalContents />
    </GlobalContextWrapper>
  );
};
