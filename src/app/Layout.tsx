import React from "react";
import Header from "../header/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
