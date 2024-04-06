import React from "react";

import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

function Navbar() {
  return (
    <div className="flex items-center p-2">
      <MobileSidebar />
      <div className="flex w-full justify-end"></div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Navbar;
