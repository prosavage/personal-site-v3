import React from "react"
import NextLink from "next/link"

interface LinkProps {
      href: string,
      children: React.ReactNode
      className?: string
}

export const Link: React.FC<LinkProps> = ({ href, children, className }) => {
      return (
            <NextLink href={href} className={`underline decoration-sky-500 font-semibold ${className}`}>
                  {children}
            </NextLink>
      );
}