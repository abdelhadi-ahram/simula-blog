import React from "react";
import StarsBackground from "./star-background";

export default function Background() {
  return (<div className="fixed inset-0" style={{ zIndex: -1 }}>
    <div className="absolute right-[150px] bottom-[150px] bg-gradient-to-l from-green-500/30 via-purple-500/20 to-teal-500/30 rounded-full w-96 h-96 blur-xl">
    </div>
    <StarsBackground className="opacity-30" />
  </div>);
}