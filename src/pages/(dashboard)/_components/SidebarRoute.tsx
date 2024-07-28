"use client";

import { BarChart, List } from "lucide-react";
import SidebarItem from "./SidebarItem";

const routes = [
  {
    icon: BarChart,
    label: "Thống kê",
    href: "/admin",
  },
  {
    icon: List,
    label: "Sản phẩm",
    href: "/admin/products",
  },
  {
    icon: List,
    label: "Danh muc",
    href: "/admin/categories",
  },
];

const SidebarRoutes = () => {
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

export default SidebarRoutes;
