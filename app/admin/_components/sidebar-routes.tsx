"use client";
import { BookOpen } from "lucide-react";

import { SidebarItem } from "./sidebar-item";

export const routes = [
  {
    icon: BookOpen,
    label: "Lectures",
    href: "/admin/lecture",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
