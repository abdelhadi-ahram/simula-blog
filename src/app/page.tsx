import React from "react";
import Background from "src/components/background/background";
import Articles from "src/components/articles";
import Header from "src/components/ui/header";

export default function Home() {
  return (
    <main className="w-screen h-screen snap-y">
      {/* <Background /> */}

      <Header />

      <Articles />
    </main>
  );
}
