import { Header } from "./organisms/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
