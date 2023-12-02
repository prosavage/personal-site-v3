"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
        ];

        return links.map((link) =>
            <Link key={link.path} href={link.url}>
                <Image  width={50} height={50} src={`/icons/${link.path}`} alt={link.url} className="w-[35px] mx-2 cursor-pointer hover:text-sky-500"/>
            </Link>
        );
    };
    return (
        <div className="flex flex-row items-start mt-8">
            {renderLinks()}
        </div>
    );
};