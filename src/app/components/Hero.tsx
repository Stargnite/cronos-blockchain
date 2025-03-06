import Image from "next/image"
import bgImg from "@/app/images/Icosahedron.png"

const Hero = () => {
	return (
		<section className="py-36 md:py-44">
			<div className="relative backdrop-blur-xl ">

				<Image src={bgImg} alt="background image" className="absolute -z-30 left-60 top-1/4 size-32 blur-sm animate-pulse" />
				<Image src={bgImg} alt="background image" className="absolute -z-20 right-28 bottom-0 size-80 blur-sm animate-pulse" />


				<div className="space-y-9 md:max-w-3xl mx-auto text-center relative z-10">
					<p className="text-sm uppercase tracking-widest text-gray-400 mb-4">WELCOME TO CRONOS</p>

					<h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-gradient">
						The Internet of <span>Blockchains.</span>
					</h1>

					<p className="text-lg text-gray-300 md:max-w-lg mx-auto">
						Cronos is an ever expanding ecosystem of connected apps and services, built for a decentralized future.
					</p>
				</div>

			</div>
		</section>
	)
}

export default Hero
