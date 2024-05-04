"use client";
import { MAX_FREE_COUNTS } from "@/constants";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";

interface FreeCounterProps {
  count: number;
  isPro: boolean;
}

const FreeCounter: React.FC<FreeCounterProps> = ({
  count = 0,
  isPro = false,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const proModal = useProModal();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  if (isPro) return null;
  return (
    <div>
      <div className="p-3 font-bold flex flex-col items-center gap-2">
        <p>
          {count}/{MAX_FREE_COUNTS} Free Generations
        </p>
        <Progress
          className="bg-slate-400"
          value={(count / MAX_FREE_COUNTS) * 100}
        />
        <Button
          onClick={proModal.onOpen}
          className="w-full bg-gradient-to-r from-indigo-500 to-pink-400"
        >
          <Zap className="h-4 w-4 mr-2" />
          Upgrade
        </Button>
      </div>
    </div>
  );
};

export default FreeCounter;
