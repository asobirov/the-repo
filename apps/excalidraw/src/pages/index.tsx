import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicExcalidraw = dynamic(
  () => import("@excalidraw/excalidraw").then((mod) => mod.Excalidraw),
  {
    ssr: false,
  },
);

const Home: NextPage = () => {
  return (
    <>
      <main className="flex h-screen flex-col items-center">
        <DynamicExcalidraw 
        />
      </main>
    </>
  );
};

export default Home;
