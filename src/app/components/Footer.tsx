import React from "react";
import Logo from "./Logo";

export default function Header() {
    return (
<>
<footer className="flex justify-center static h-full w-full">
    <div className="absolute bottom-5">
        <Logo/>
    </div>
</footer>
</>
    );
  }