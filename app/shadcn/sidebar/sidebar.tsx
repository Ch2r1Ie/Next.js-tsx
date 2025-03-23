import React from "react";
import UserItems from "@/components/sidebar/user-item";
import { SideBarCommand } from "@/components/sidebar/command";

const SideBar = () => {
  return (
    <div className="fixed flex flex-col gap-2 w-[300px] min-h-screen border-r p-4">
      <UserItems />
      <SideBarCommand />
    </div>
  );
};

export default SideBar;
