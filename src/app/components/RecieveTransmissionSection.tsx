import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const RecieveTransmissionSection = () => {
	return (
		<div className="w-full bg-black px-4 py-8 md:px-8 lg:px-44">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Receive transmissions</h2>
            <div className="flex items-center text-sm text-white/80">
              <span>Unsubscribe at any time.</span>
              <Link href="/privacy-policy" className="ml-1 flex items-center hover:text-white">
                Privacy policy
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none ring-white/20 transition-all focus:ring-2 md:w-[280px]"
            />
          </div>
        </div>
      </div>
    </div>
	)
}

export default RecieveTransmissionSection;
