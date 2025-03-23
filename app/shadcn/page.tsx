"use-client";

import React from "react";
import SideBar from "./sidebar/sidebar";
import Header from "./header/header";

const page = () => {
  return (
    <body className="flex items-start justify-between">
      <SideBar />
      <main className="grid w-full h-full pl-[300px]">
        <Header />
      </main>
    </body>
  );
};

export default page;
