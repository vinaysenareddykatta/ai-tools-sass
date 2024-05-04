import React from "react";

import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription()
  return (
    <div className="flex items-center p-2">
      <MobileSidebar limit={apiLimitCount} isPro={isPro} />
      <div className="flex w-full justify-end"></div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
