"use client";
import { useContext } from "react";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { ClobalContext } from "@/app/context/Context";
import Image from "next/image";
import { CircleX, ZoomIn, ZoomOut } from "lucide-react";

const Overlay = () => {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { overlay, setOverlay } = context;

  const Controls = () => {
    const { zoomIn, zoomOut } = useControls();

    return (
      <div className="tools flex flex-row items-center gap-2">
        <button
          className="px-2 rounded-sm  text-sm font-bold text-[#2e3c58] shadow-md py-2 "
          onClick={() => zoomIn()}
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          className="px-2 rounded-sm  text-sm font-bold text-[#2e3c58] shadow-md py-2 "
          onClick={() => zoomOut()}
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          className="px-2 rounded-sm  text-sm font-bold text-[#2e3c58] shadow-md py-2 "
          onClick={() => setOverlay("")}
        >
          <CircleX className="w-4 h-4" />
        </button>
      </div>
    );
  };

  return (
    <div className="absolute left-0 right-0 bottom-0 top-[196.89px] w-full  bg-[#000000c5] z-10 flex items-center justify-center ">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center px-10 py-4 w-[100%] h-[90%] bg-white rounded-md border border-[#2e3c58] gap-2">
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
          >
            {() => (
              <>
                <Controls />
                <TransformComponent>
                  <Image src={overlay} alt={""} width={400} height={400} />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
