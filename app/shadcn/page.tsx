"use-client";

import React from "react";
import SideBar from "./sidebar/sidebar";
import Header from "./header/header";

const page = () => {
  return (
    <body className="flex items-start justify-between">
      <div>
        <SideBar />
      </div>
      <div className="grid w-full h-full pl-[300px]">
        <Header />
      </div>
    </body>
  );
};

export default page;
