import React from "react";
import Image from "next/image";
import antelop from "src/images/antelop.jpeg";

export default function Header() {
  return (
    <div className="z-20 bg-zinc-black/30 fixed top-0 inset-0 flex items-center justify-between px-20 h-24">
      <div className="fixed left-0 top-0 flex w-full items-center space-x-2 justify-center border-b bg-gradient-to-b p-2 px-3 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-zinc-800/30">
        <Image
          src={antelop}
          className="rounded-md"
          alt="Abdelhadi's Antelop"
          width={40}
          height={24}
          priority
        />
        <code className="font-mono font-bold">Simula Blog</code>
      </div>

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:size-auto lg:bg-none">
        <a
          href="https://www.simula.live"
          download="resume.pdf"
          className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto border p-2 rounded-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>

          <span>Navigate to simula</span>
        </a>
      </div>
    </div>
  );
}