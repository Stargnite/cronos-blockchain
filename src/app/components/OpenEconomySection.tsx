import Image from "next/image"
import vaultImg from "@/app/images/vaultImg.png"
import coinImg from "@/app/images/coinImg.png"

const OpenEconomySection = () => {
	return (
		<section className="py-24">
			{/* HEADER */}
			<header className="w-full px-4 sm:px-6 md:px-8 lg:px-0 max-w-3xl mx-auto flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 text-white">
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-br from-white to-gray-600 bg-clip-text text-transparent">
					Be part of The Open Economy of the Future
				</h1>
				<h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl">Powerful features {">"}</h3>
			</header>

			<section className="bg-black text-white py-12 px-4 md:py-16 md:px-8">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
						{/* Interchain Accounts - Large Card (Left) */}
						<div className="bg-zinc-900/80 rounded-lg p-6 md:p-8 flex flex-col min-h-[500px] md:min-h-[600px]">
							<span className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Interchain Accounts</span>

							<div className="flex-grow flex items-center justify-center py-8">
								<div className="relative w-48 h-48 md:w-64 md:h-64">
									<Image
										src={vaultImg}
										alt="Secure vault with gold lock"
										// width={256}
										// height={256}
										className=" drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] w-full h-full"
									/>
								</div>
							</div>

							<div>
								<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gradient">
									One secure account for all your digital assets.
								</h3>
								<span className="text-xs text-zinc-500 uppercase tracking-wider">Coming Soon</span>
							</div>
						</div>

						{/* Right Column */}
						<div className="grid grid-cols-1 gap-4 md:gap-6">
							{/* Decentralized Exchange - Top Right */}
							<div className="bg-zinc-900/80 rounded-lg p-6 md:p-8 min-h-[280px] md:min-h-[300px]">
								<span className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Decentralized Exchange</span>

								<div className="flex flex-row items-center justify-between mt-4">
									<div className="max-w-[60%]">
										<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gradient">Swap tokens & collectibles.</h3>
										<span className="text-xs text-zinc-500 uppercase tracking-wider">Coming Soon</span>
									</div>

									<div className="relative w-24 h-24 md:w-32 md:h-32">
										<Image
											src={coinImg}
											alt="Gold cryptocurrency coins"
											width={128}
											height={128}
											className="object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] absolute -top-5 right-0"
										/>
										<Image
											src={coinImg}
											alt="Gold cryptocurrency coins"
											width={128}
											height={128}
											className="object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
										/>
									</div>
								</div>
							</div>

							{/* Bottom Small Cards Container */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
								{/* Liquidity Pool - Bottom Left */}
								<div className="bg-zinc-900/80 rounded-lg p-6 min-h-[200px] md:min-h-[280px] flex flex-col">
									<span className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Liquidity Pool</span>

									<div className="mt-auto flex flex-col">
										<h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-gradient">Provide liquidity, earn rewards.</h3>
										<span className="text-xs text-zinc-500 uppercase tracking-wider">Coming Soon</span>
									</div>
								</div>

								{/* Wrapped ETH - Bottom Right */}
								<div className="bg-zinc-900/80 rounded-lg p-6 min-h-[200px] md:min-h-[280px] flex flex-col">
									<span className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Wrapped ETH</span>

									<div className="mt-auto flex flex-col">
										<h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-gradient">Eth Included</h3>
										<span className="text-xs text-zinc-500 uppercase tracking-wider">Coming Soon</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	)
}

export default OpenEconomySection
