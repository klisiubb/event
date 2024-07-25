import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const { getPermission, isAuthenticated } = getKindeServerSession();
  const isAdmin = await getPermission("admin");

  if ((await isAuthenticated()) === false || !isAdmin?.isGranted) {
    return redirect("/");
  }

  return (
    <div className="min-h-[calc(100vh-160px)] p-6 md:p-10">Admin Panel</div>
  );
}
