import Image from 'next/image'
import { Biolinks } from './biolinks'

export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col justify-center p-24 items-center">
      <div className="flex flex-row items-start max-w-4xl">
        <div className='mr-8'>
          <p className="h-10 text-3xl font-bold">Hi, I'm Naman.</p>
          <p className="text-xl">I love making ideas come to life with code. I'm a huge TypeScript and Golang fan.</p>
          <p className="text-xl mt-8">I'm currently interested in cryptocurrency programming and system design. I also enjoy reading in my free time. Based in San Diego, CA.</p>
          <Biolinks/>
        </div>
        <div>
          <img src="/pfp.png" className="max-w-xs rounded-4xl" />
        </div>
      </div>
    </main>
  )
}
