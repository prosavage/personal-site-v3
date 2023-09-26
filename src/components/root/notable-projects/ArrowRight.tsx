import React from "react"

interface ArrowRightProps {
      className?: string
}

export const ArrowRight: React.FC<ArrowRightProps> = ({ className }) => {
      return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>


      );
}