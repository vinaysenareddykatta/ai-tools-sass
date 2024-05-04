"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="flex items-center justify-between p-2 px-5">
      <Link href="/" className="flex items-center gap-4">
        <div className="relative w-16 h-16">
          <Image fill alt="Logo" src="/ai-logo.png" />
        </div>
        <h2 className={cn("font-bold text-2xl text-teal-900", font.className)}>
          Generative
        </h2>
      </Link>
      <div className="">
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      </div>
    </nav>
  );
};
