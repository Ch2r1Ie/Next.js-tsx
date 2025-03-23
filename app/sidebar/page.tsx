"use-client";

import React from "react";
import UserItems from "./components/user-item";
import { SideBarCommand } from "./components/sidebar-command";

const page = () => {
  return (
    <div className="flex flex-col gap-2 w-[300px] min-h-screen border-r p-4">
      <div>
        <UserItems />
      </div>
      <div className="grow">
        <SideBarCommand />
      </div>
    </div>
  );
};

export default page;
