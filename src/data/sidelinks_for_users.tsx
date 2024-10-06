import {
  IconLayoutDashboard,
  IconSettings,
  IconUsers,
  IconChecklist,
} from "@tabler/icons-react";

export interface NavLink {
  title: string;
  label?: string;
  href: string;
  icon: JSX.Element;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

export const sidelinks: SideLink[] = [
  {
    title: "Dashboard",
    label: "Dashboard",
    href: "/dashboard/user",
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: "Find Specialist",
    label: "Specialist",
    href: "/dashboard/user/find-specialist",
    icon: <IconUsers size={18} />,
  },
  {
    title: "My Bookings",
    label: "Bookings",
    href: "/dashboard/user/my-bookings",
    icon: <IconChecklist size={18} />,
  },
  {
    title: "Settings",
    label: "Settings",
    href: "/dashboard/user/settings/profile",
    icon: <IconSettings size={18} />,
  },
];
