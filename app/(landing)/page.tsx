import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="flex space-x-2">
        <Link href="/sign-in">
          <Button size="sm">Sign In</Button>
        </Link>
        <Link href="/sign-up">
          <Button size={"sm"}>Register</Button>
        </Link>
      </div>
    </div>
  );
}
