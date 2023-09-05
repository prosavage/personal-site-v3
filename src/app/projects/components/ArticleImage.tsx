import React from "react"

interface ArticleImageProps {
      src: string
}

export const ArticleImage: React.FC<ArticleImageProps> = ({ src }) => {
      return (
            <img src={src} className="w-screen rounded-xl border-2 border-sky-500" />
      );
}