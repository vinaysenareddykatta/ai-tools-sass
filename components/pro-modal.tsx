"use client";
import {
  Check,
  Code,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  VideoIcon,
  Zap,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "@/components/ui/badge";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
const tools: any = [
  {
    label: "Start a conversation",
    icon: MessageSquare,
    color: "text-pink-800",
    bgColor: "bg-pink-100",
    href: "/conversation",
  },
  {
    label: "Generate images",
    icon: ImageIcon,
    color: "text-blue-900",
    bgColor: "bg-blue-100",
    href: "/image",
  },
  {
    label: "Generate videos",
    icon: VideoIcon,
    color: "text-orange-900",
    bgColor: "bg-orange-100",
    href: "/video",
  },
  {
    label: "Generate music",
    icon: MusicIcon,
    color: "text-lime-800",
    bgColor: "bg-lime-100",
    href: "/music",
  },
  {
    label: "Generate code",
    icon: Code,
    color: "text-yellow-800",
    bgColor: "bg-yellow-100",
    href: "/code",
  },
];
export const ProModal = () => {
  const proModal = useProModal();

  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex justify-center items-center flex-col ">
              <div className="gap-2 flex justify-center items-center">
                Upgrade to Pro
                <Badge className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase text-sm">
                  Pro
                </Badge>
              </div>
            </DialogTitle>
            <DialogDescription>
              <div className="text-center font-medium">
                {tools.map((tool: any) => {
                  return (
                    <Card
                      key={tool.label}
                      className="flex items-center justify-between p-3 border-black/5 mb-2"
                    >
                      <div className="flex items-center gap-x-4">
                        <div
                          className={cn("p-2 w-fit rounded-md", tool.bgColor)}
                        >
                          <tool.icon className={cn("w-6 h-6", tool.color)} />
                        </div>
                        <div className="font-bold text-sm">{tool.label}</div>
                      </div>
                      <Check className="text-primary w-5 h-5" />
                    </Card>
                  );
                })}
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-center items-center">
            <Button
              disabled={loading}
              onClick={onSubscribe}
              className="w-full bg-gradient-to-r from-indigo-500 to-pink-500"
            >
              <Zap className="mr-2" />
              Upgrade
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
