import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import {
  Excalidraw,
  Footer,
  LiveCollaborationTrigger,
  MIME_TYPES,
  MainMenu,
  Sidebar,
  exportToBlob,
  exportToCanvas,
  exportToClipboard,
  exportToSvg,
  restoreElements,
  sceneCoordsToViewportCoords,
  useHandleLibrary,
  viewportCoordsToSceneCoords,
} from "@excalidraw/excalidraw";
import {
  AppState,
  BinaryFileData,
  ExcalidrawImperativeAPI,
  ExcalidrawInitialDataState,
  PointerDownState as ExcalidrawPointerDownState,
  Gesture,
  LibraryItems,
} from "@excalidraw/excalidraw/types/types";

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
        <DynamicExcalidraw />
      </main>
    </>
  );
};

export default Home;
