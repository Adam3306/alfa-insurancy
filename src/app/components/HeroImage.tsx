"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function HeroImage() {
  useEffect(() => {
    // Preload hero image
    const imageUrl = "/executive-businessman.jpg";
    const img = new window.Image();
    img.src = imageUrl;
  }, []);

  return (
    <div className="w-full md:w-1/2 flex items-center justify-center bg-[#3A5D98] pt-6 md:pt-0 pb-4 md:pb-0">
      <div className="border-8 border-[#4592c6] bg-white w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center mx-auto">
        <Image
          src="/executive-businessman.jpg"
          alt="Kézfogás, bizalom"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
