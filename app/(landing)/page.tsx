import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
{
  /* <div className="flex space-x-2">
<Link href="/sign-in">
  <Button size="sm">Sign In</Button>
</Link>
<Link href="/sign-up">
  <Button size={"sm"}>Register</Button>
</Link>
</div> */
}
