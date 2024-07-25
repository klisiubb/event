"use client";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export const NavbarRoutes = () => {
  return (
    <>
      <div className="flex items-center text-xs md:text-sm gap-x-4 ml-auto">
        <Link className="hover:text-primary" href="/">
          Go home
        </Link>
        <Link
          className="hover:text-primary"
          href="/api/auth/logout"
          prefetch={false}
        >
          Logout
        </Link>
        <ModeToggle />
      </div>
    </>
  );
};
