"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
  limit: number;
  isPro: boolean;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  limit = 0,
  isPro = false,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden rounded-none">
          <Menu color="teal" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-72">
        <Sidebar apiLimitCount={limit} isPro={isPro} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
