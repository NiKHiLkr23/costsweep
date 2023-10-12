"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineHeart,
  AiTwotoneHeart,
} from "react-icons/ai";

const Navbar = () => {
  const [like, setLike] = useState<boolean>(false);

  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />

          <p className="nav-logo">
            Cost<span className="text-primary">Sweep</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          <button onClick={() => setLike(!like)}>
            {!like ? (
              <AiOutlineHeart className="w-5 h-5 " />
            ) : (
              <AiTwotoneHeart className="w-5 h-5 text-primary" />
            )}
          </button>

          <Link href={"https://github.com/NiKHiLkr23/costsweep"}>
            <div className="flex w-full items-center  gap-2 bg-gray-100 p-1 rounded-md shadow-sm">
              <AiOutlineGithub className="h-5 w-5 " />
              <span className="text-xs font-medium ">Star on Github </span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
