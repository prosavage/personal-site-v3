"use client";
import React from "react";

interface PreviewProps {
      imgSrc: string
}

export const Preview: React.FC<PreviewProps> = ({ imgSrc }) => {
     
      return (
            <div className="flex">
                  {/* <Image src={imgSrc} alt="preview" layout="fill" objectFit="cover/contain" /> */}
                  <iframe src={imgSrc} key={imgSrc}  height={`800`} className="border-2 border-gray-300 rounded-lg w-full self-center"></iframe>
            </div>
      );
};