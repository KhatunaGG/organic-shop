"use client";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const BackLink = () => {
  return (
    <Link
      href="/"
      className="flex flex-row items-center space-x-2 hover:text-green-700 transition-all duration-300 ease-in-out"
    >
      <MoveLeft className="w-5 h-5" />
      <h2 className="py-6">Go back</h2>
    </Link>
  );
};

export default BackLink;
