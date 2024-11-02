"use client";
import { DataType } from "@/app/context/Context";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ImageSliderPropsType = {
    data: DataType[];
}

const ImageSlider = ({ data }: ImageSliderPropsType) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage(prev => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [data.length]);

  return (
    <div className="w-full overflow-hidden border border-green-950 rounded-lg shadow-lg p-2 flex items-center justify-center transition-transform duration-400 ease-in-out">
      {data.map((product, i) => (
        i === activeImage && (
          <div key={i} className="relative w-full min-h-[200px]">
            <Image
              src={product.image}
              alt=""
              fill
              className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        )
      ))}
    </div>
  );
};

export default ImageSlider;

