import React from "react";
import NextLink from "next/link";

interface TextLinkProps {
      href: string,
      children: React.ReactNode
      className?: string
}

export const TextLink: React.FC<TextLinkProps> = ({ href, children, className }) => {
      return (
            <NextLink href={href} className={`underline decoration-sky-500 font-semibold ${className}`}>
                  {children}
            </NextLink>
      );
};