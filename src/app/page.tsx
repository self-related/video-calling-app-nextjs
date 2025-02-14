import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh] h-fit">
        <p className="block">Nothing here</p>
        <Button className="block">Sign in</Button>
    </div>
  );
}
