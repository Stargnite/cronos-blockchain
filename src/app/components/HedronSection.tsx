import Link from "next/link"
import { ArrowRight } from "lucide-react"
import img from "@/app/images/Icosahedron.png"
import Image from "next/image"

export default function HedronSection() {
  return (
    <section className="relative w-full bg-black min-h-[500px] flex items-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-30"></div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* 3D Hedron */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute bg-blue-800 blur-md w-32 lg:w-60 h-32 lg:h-60 hidden lg:flex rounded-full z-10 top-60 left-48 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bg-blue-700 blur-3xl w-60 h-60 hidden lg:flex rounded-full top-56 left-48 -translate-x-1/2 -translate-y-1/2" />
              <Image src={img} alt="absolute z-10" className="relative z-10 animate-spin [animation-duration:10s]" />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-white to-gray-600 bg-clip-text text-transparent">
              Secured by the Hedron.
            </h2>

            <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
              In return for securing the services on the Cronos Hub, transaction fees and staking rewards are
              distributed to HEDRON stakers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#start-staking"
                className="bg-gradient-to-br from-white to-gray-600 hover:cursor-pointer transition-colors text-black px-6 py-3 rounded font-medium hover:bg-gray-300"
              >
                Start Staking
              </Link>

              <Link
                href="#learn-more"
                className="flex items-center justify-center gap-2 text-white hover:text-gray-300 transition-colors px-6 py-3"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


