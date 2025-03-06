import Image from "next/image";
import bgImg from "@/app/images/dounut.png"
import img1 from "@/app/images/heartImg1.png"
import img2 from "@/app/images/heartImg2.png"
import img3 from "@/app/images/heartImg3.png"
import img4 from "@/app/images/heartImg4.png"

const data = [
	{
		img: img1,
		subtitle: "Marketplace",
		content: "Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees and instant transaction confirmation."
	},
	{
		img: img2,
		subtitle: "Security provider",
		content: "With the upcoming Interchain Security feature, HEDRON will soon be securing many chains, in exchange for additional staking rewards."
	},
	{
		img: img3,
		subtitle: "Router",
		content: "A core mission of the Hub – to connect chains by establishing IBC connections with compatible chains and operating decentralized bridges with chains like Ethereum and Bitcoin."
	},
	{
		img: img4,
		subtitle: "Custodian",
		content: "Located at the crossroads of the Interchain, the Hub is extremely secure, the best place to hold digital assets and manage accounts across many chains."
	}
]

const TheHeart = () => {
	return (
		<section className="py-20 space-y-40">
			<div className="relative backdrop-blur-xl">

				<Image src={bgImg} alt="background image" className="absolute -z-20 top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm animate-pulse size-96" />


				<div className="flax flex-col space-y-9 max-w-3xl mx-auto text-center relative z-10">
					<p className="text-sm uppercase tracking-widest text-gray-400 mb-4">ENTER THE CRONOS HUB</p>

					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-lg mb-6 text-gradient">
						The Heart of The Interchain.
					</h1>

					<p className="text-lg text-gray-300 max-w-lg mx-auto">
						Serving as the economic center of Cronos, the Cronos Hub is a
						blockchain that provides vital serivces to the interchain.
					</p>
				</div>

			</div>

			<div className="container mx-auto gap-24 flex flex-col items-start">
				<div className="container mx-auto flex items-center justify-center flex-col text-white">
					<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-20">
						{data.map((item, index) => (
							<div className="flex flex-col gap-y-4 max-w-72" key={index}> 
								<div className="relative">
									<div className="absolute w-10 h-10 bottom-10 left-12 size-30 bg-slate-400 blur-xl" />
									<Image src={item.img} alt="" className="relative size-40" />
								</div>
								<h2 className="font-bold text-3xl">{item.subtitle}</h2>
								<p>{item.content}</p>
							</div>
						))}
					</div>
				</div>

				<button className="px-8 py-4 text-lg rounded-none mx-auto
					bg-gradient-to-br from-white to-gray-600 cursor-pointer transition-color">
					Cosmos Hub {">"}
				</button>
			</div>
		</section>
	)
}

export default TheHeart
