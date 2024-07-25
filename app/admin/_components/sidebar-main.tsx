"use client";
import { SidebarItem } from "./sidebar-item";
import { routes } from "./sidebar-routes";

export const SidebarMain = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
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
