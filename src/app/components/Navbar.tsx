import React from "react";
import NavItem from "./NavItem"

let NavItems = ["Shop", "Cart", "About", "Contact"]

export default function Navbar() {
    return (
      <nav className="flex items-center justify-evenly gap-5">
        {NavItems.map(item => {
      return (
        <NavItem 
        LinkTitle={item}
        key={item}/>
      )
    })}
      </nav>
    );
  }