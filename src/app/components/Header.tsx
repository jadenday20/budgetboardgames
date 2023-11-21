import React from "react";
import Navbar from "./Navbar"
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
    return (
<>
<header className="flex justify-between p-5 bg-zinc-800	">
<div className="flex text-white gap-3 align-middle">
    <Logo/>
    <Link href="/">
        <h1 className="font-bold text-3xl">Budget Board Games</h1>
        <p className="text-xs">The perfect place to buy great board games at an affordable price.</p>
    </Link>
</div>
<Navbar/>
</header>
</>
    );
  }