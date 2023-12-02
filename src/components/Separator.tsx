import React from "react";

interface HeroSeparatorProps {
      className?: string
}

export const Separator: React.FC<HeroSeparatorProps> = ({ className}) => {
      return (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`/hero-seperator.svg`} alt={`hero-seperator-border`} className={`w-full h-[4px] ` + className} />
      );
};