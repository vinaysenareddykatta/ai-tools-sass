"use client";

import Image from "next/image";
import Link from "next/link";

import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const monteserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-rose-700",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-pink-800",
  },
  {
    label: "Image generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-blue-900",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-900",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-lime-600",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-yellow-800",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-teal",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-1 flex flex-col h-full bg-teal-100">
      <div className="p-1 flex-1">
        <Link
          href="/dashboard"
          className="flex items-center p-2 mb-4 bg-teal-400 rounded-sm"
        >
          <div className="relative w-8 h-8 mr-5">
            <Image fill alt="logo" src="/chatbot.png" />
          </div>
          <h2
            className={cn(
              "font-bold text-2xl text-teal-900",
              monteserrat.className
            )}
          >
            Generative
          </h2>
        </Link>

        {/* routes*/}
        <div className="space-y-1">
          {routes.map((route) => {
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-large cursor-pointer hover:bg-white rounded-sm transition",
                  pathname === route.href && "bg-teal-50"
                )}
              >
                <div className="flex items-center flex-1 font-bold text-teal-900">
                  <route.icon className={cn("h-6 w-6 mr-5", route.color)} />
                  {route.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
