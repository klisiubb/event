import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const { getPermission, isAuthenticated } = getKindeServerSession();
  const isAdmin = await getPermission("admin");

  if ((await isAuthenticated()) === false || !isAdmin?.isGranted) {
    return redirect("/");
  }

  return (
    <div className="min-h-[calc(100vh-160px)] p-6 md:p-10">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl md:text-3xl font-medium text-reset">
          Lectures:
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">
          You can create new lectures or manage existing ones.
        </p>
      </div>
      <Button
        asChild
        size="sm"
        variant="default"
        className="my-4 w-full md:w-1/2 xl:w-1/4"
      >
        <Link href="/admin/lecture/create">Create new lecture</Link>
      </Button>
    </div>
  );
}
