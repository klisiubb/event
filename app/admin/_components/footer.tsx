import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { link } from "fs";

export const Footer = () => {
  return (
    <div className="flex justify-center py-4 md:py-8 h-[80px] border-t md:ms-[224px]">
      <div className="text-sm text-primary mr-4 flex flex-col items-center md:flex-row">
        <span className="hidden md:block">
          Event App &copy; {new Date().getFullYear()} |
        </span>
        <span className="italic mx-1">
          by
          <Button className="p-1" asChild variant="link">
            <Link href="https://github.com/klisiubb/">Mateusz Kliś</Link>
          </Button>
        </span>
      </div>
    </div>
  );
};
