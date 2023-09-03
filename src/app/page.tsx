import { Hero } from "./Hero";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col justify-center p-12 md:p-24 items-center">
      <div className="max-w-4xl">
        <Hero />
      </div>
    </main>
  )
}
