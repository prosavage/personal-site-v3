"use client"
import React from "react"

interface ButtonProps {
      children: React.ReactNode
      onClick?: () => void
      className?: string
      icon?: React.ReactNode
      alignIcon?: "left" | "right"
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, icon, alignIcon }) => {

      if (!alignIcon) alignIcon = "left"

      const renderIcon = (alignIcon: "left" | "right") => {

            const alignClass = alignIcon === "left" ? "mr-1" : "ml-1"

            return <div className={`group-hover:text-sky-500 ${alignClass} ease-in-out duration-200`}>
                  {icon}
            </div>
      }


      return (
            <div className={`flex justify-center items-center rounded-md border-gray-300 hover:border-sky-300 border-2 border-dashed hover:border-solid p-1 cursor-pointer group ease-in-out duration-200 ${className}`}
                  onClick={onClick}
            >
                  {icon && alignIcon === "left" && renderIcon(alignIcon)}
                  {children}
                  {icon && alignIcon === "right" && renderIcon(alignIcon)}
            </div>
      );
}