import Image from "next/image";
import React from "react"

interface ArticleImageProps {
      src: string
}

export const ArticleImage: React.FC<ArticleImageProps> = ({ src }) => {
      return (
            <Image
            src={src}
            alt={"dab"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional
            className="rounded-lg border-2 border-sky-500"
          />
      );
}