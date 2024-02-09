import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RightSideDrawer from "../Common/RightSideDrawer";
import { Bars4Icon } from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Home", url: "/" },
  { label: "User List", url: "/users/list" },
  { label: "Create User", url: "/users/create" },
];

const BaseNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const isActiveRoute = (activeNavLink) => pathname === activeNavLink;

  return (
    <nav className="sticky top-0  p-4 bg-white border-b border-gray-200 lg:border-none">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <div className="flex items-center">
          <Link
            className="font-bold text-gray-700 lg:text-xl md:text-lg"
            to={`/`}
          >
            User-List
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Bars4Icon
            onClick={() => setDrawerOpen(true)}
            className="block h-7 w-7 cursor-pointer md:hidden"
            aria-hidden="true"
          />
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.url}
              className={`hidden md:flex text-gray-600 hover:bg-gray-50 hover:text-gray-900 group items-center px-3 py-2 text-sm font-medium rounded-md ${
                isActiveRoute(item.url) &&
                "bg-primary-100 hover:bg-primary-100 text-primary hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <RightSideDrawer open={drawerOpen} setOpen={setDrawerOpen}>
        <div>
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.url}
              className={`flex text-gray-600 hover:bg-gray-50 hover:text-gray-900 group items-center px-3 py-2 text-sm font-medium rounded-md ${
                isActiveRoute(item.url) &&
                "bg-primary-100 hover:bg-primary-100 text-primary hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </RightSideDrawer>
    </nav>
  );
};
export default BaseNav;
