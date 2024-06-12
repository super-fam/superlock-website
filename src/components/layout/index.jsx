import {Outlet} from "react-router-dom";
import Footer from "../footer";
import React from "react";

const Layout = () => {
  return <>
    <Outlet />
    <Footer />
  </>
}

export default Layout;