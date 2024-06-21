import React from "react";
import NavigationBar from "./NavigationBar";
import "../../styles/common/Layout.css";
const Layout = ({ children }) => (
  <div>
    <NavigationBar />
    <main>{children}</main>
  </div>
);

export default Layout;
