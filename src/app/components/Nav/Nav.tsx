"use client";
import React, { ReactNode } from "react";
import Search from "../Search/Search";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const path = usePathname();
  const LinkItem = ({
    href,
    children,
  }: {
    href: string;
    children: ReactNode;
  }) => (
    <Link href={href}>
      <span className="hover:text-green-700 transition-colors duration-200">
        {children}
      </span>
    </Link>
  );

  return (
    <div className="h-[10vh] flex flex-row items-center">
      <Search />
      <div className="hidden md:flex h-[70%] w-[1px] bg-[#b6b2b2]"></div>

      <div className="hidden w-[50%] md:flex items-center justify-start gap-4 text-[#7d7979] font-bold cursor-pointer ml-4">
        {path !== "/" && <LinkItem href={`/`}>Home</LinkItem>}
        <LinkItem href={"/pages/favorites"}>Favorites</LinkItem>
        <LinkItem href={`/pages/shoppingcart`}>Shopping Cart</LinkItem>
        <LinkItem href={`/pages/checkout`}>Checkout</LinkItem>
        <LinkItem href={`/pages/sale`}>Sale</LinkItem>
        <LinkItem href={`/pages/myAccount`}>My Account</LinkItem>
      </div>
    </div>
  );
};

export default Nav;
