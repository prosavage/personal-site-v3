"use client"
import React from "react"

interface BiolinksProps {

}

export const Biolinks: React.FC<BiolinksProps> = ({ }) => {
      const renderLinks = () => {
            const links = [
                  {
                        "path": "github.svg",
                        "url": "https://github.com/prosavage",
                  },
                  {
                        "path": "linkedin.svg",
                        "url": "https://www.linkedin.com/in/prosavage/",
                  },
                  {
                        "path": "instagram.svg",
                        "url": "https://www.instagram.com/thecommondenamanator/",
                  }
            ]

            return links.map((link) =>
                  <img src={`/icons/${link.path}`} className="w-[35px] mx-2 cursor-pointer" onClick={() => window.location.href = link.url} />
            )
      }
      return (
            <div className="flex flex-row items-start mt-8">
                  {renderLinks()}
            </div>
      );
}