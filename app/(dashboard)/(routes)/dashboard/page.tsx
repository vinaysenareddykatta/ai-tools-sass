"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  Image,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  Router,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const tools = [
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

  return (
    <div>
      <div className="mb-3 p-2">
        <h2 className="font-bold text-center">Explore the power of AI.</h2>
        <p className="text-muted-foreground">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          nihil culpa nisi rem. Aliquid illo soluta vel pariatur, autem tenetur,
          aliquam dignissimos labore, est consectetur cumque expedita accusamus
          aut. Quia?
        </p>
      </div>
      <Separator className="my-0 py-0" />
      <div className="m-4">
        {tools.map((tool) => {
          return (
            <Card
              key={tool.href}
              className="p-2 m-2  border-black/5 flex items-center justify-between hove:shadow-md transition cursor-pointer hover:bg-teal-100"
              onClick={() => router.push(tool.href)}
            >
              <div className="flex items-center gap-x-4">
                <div
                  className={cn("p-2 w-fit rounded-md bg-black", tool.bgColor)}
                >
                  <tool.icon className={cn("w-5 h-5", tool.color)} />
                </div>
                <div className=" font-semibold">{tool.label}</div>
              </div>
              <ArrowRight />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
