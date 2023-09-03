import { Biolinks } from './Biolinks'
import Image from "next/image"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col justify-center p-12 md:p-24 items-center">
      <div className="max-w-4xl">
        <div className="flex flex-row items-start w-full">
          <div className='mr-8'>
            <p className="h-10 text-2xl md:text-3xl font-bold">Hi, I&apos;m Naman.</p>
            <p className="text-lg md:text-xl">I love making ideas come to life with code. I&apos;m a huge TypeScript and Golang fan.</p>
            <p className="text-lg md:text-xl mt-8">I&apos;m currently interested in cryptocurrency programming and system design. I also enjoy reading in my free time. Based in San Diego, CA.</p>
            <Biolinks />
          </div>
          <div className={"hidden md:flex"}>
            <Image src={"/hero.png"} alt={"Naman's Profile Picture"} width={2000} height={2000} className="max-w-xs rounded-4xl" />
          </div>
        </div>
        <img src={"/hero-seperator.svg"} alt={"hero-seperator-border"} className={"w-full h-[4px] mt-8"} />
      </div>
    </main>
  )
}
