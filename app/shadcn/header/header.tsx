import React from "react";

import HeaderCommand from "@/components/header/command";
import { Button } from "@/components/ui/button";
import { BellRing } from "lucide-react";

const Header = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b">
      <HeaderCommand></HeaderCommand>
      <div className="flex items-center justify-end">
        <Button>
          <BellRing />
        </Button>
      </div>
    </div>
  );
};

export default Header;
