"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="px-24">
      <div className="py-36 flex justify-center items-center flex-col">
        <h1 className="text-7xl uppercase font-bold">
          Build Imagination on your mind with generative AI
        </h1>
        <div className="flex gap-4 py-8">
          <h6>Code</h6>
          <h6>Music</h6>
          <h6>Images</h6>
          <h6>Videos</h6>
          <h6>Conversations</h6>
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
            <Button className="bg-gradient-to-r from-indigo-500 to-pink-500">
              Start for free now <Zap className="w-6 h-6 ml-2" />
            </Button>
          </Link>
          <h6 className="text-muted-foreground text-sm">
            No credit card required
          </h6>
        </div>
      </div>
    </div>
  );
};
