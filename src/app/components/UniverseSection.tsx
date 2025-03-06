"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button";
import spiral from "@/app/images/spiral.png";
import {
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import { useRef } from "react";

const UniverseSection = () => {
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

	return (
		<section ref={heroRef} className="text-white py-24 relative">
			{/* Gradient spiral shape */}
			<div className="absolute -left-40 md:-left-32 -bottom-20 md:-bottom-96 -translate-y-1/2 w-[600px] h-[600px] opacity-80 animate-pulse">
				<motion.img
					src={spiral.src}
					style={{
						translateY: translateY,
					}}
					alt=""
					className="size-72"
				/>
			</div>

			<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<div className="max-w-2xl">
					<p className="text-sm text-gray-400 uppercase tracking-wider mb-6">Community-owned and operated</p>

					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
						Enter a Universe of Connected Services.
					</h2>

					<p className="text-gray-300 text-lg mb-8 max-w-xl">
						Cronos apps and services connect using IBC, the Inter-Blockchain Communication protocol. This innovation
						enables you to freely exchange assets and data across sovereign.
					</p>

					<div className="flex items-center gap-4 flex-wrap">
						<Button variant="secondary" className="px-12 py-4 text-lg rounded-none 
					bg-gradient-to-br from-white to-gray-600 cursor-pointer transition-color ">
							Learn
						</Button>

						<Link
							href="/explore-tokens"
							className="flex items-center text-white hover:text-gray-200 transition-colors text-lg"
						>
							Explore Tokens
							<ChevronRight className="ml-1 h-5 w-5" />
						</Link>
					</div>
				</div>

				<div className="space-y-12">
					<div className="text-center lg:text-right bg-gradient-to-br from-white to-gray-600 text-transparent bg-clip-text">
						<div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">265+</div>
						<div className="text-gray-400">Apps & services</div>
					</div>

					<div className="text-center lg:text-right bg-gradient-to-br from-white to-gray-600 text-transparent bg-clip-text">
						<div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">$63B+</div>
						<div className="text-gray-400">Digital assets</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default UniverseSection;

