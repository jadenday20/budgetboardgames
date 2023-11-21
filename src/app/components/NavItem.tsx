import React from "react";
import Link from 'next/link';

export default function NavItem({LinkTitle} : {LinkTitle:any}) {
    return (
        <Link href={`/${LinkTitle.toLowerCase()}`} className="bg-red-900 text-white font-bold p-4 pl-20 pr-20 rounded-lg hover:bg-red-800 duration-500">{LinkTitle}</Link>
    );
  }