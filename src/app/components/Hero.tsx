"use client"

import bgImg from "@/app/images/Icosahedron.png"
import {
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import { useRef } from "react";

const Hero = () => {
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

	return (
		<section ref={heroRef} className="py-36 md:py-44">
			<div className="relative backdrop-blur-xl ">

				<motion.img
					src={bgImg.src}
					style={{
						translateY: translateY,
					}}
					alt="background image"
					className="absolute z-20 left-20 top-1/4 size-32 hidden md:block"
				/>
				<motion.img
					src={bgImg.src}
					style={{
						translateY: translateY,
					}}
					alt="background image"
					className="absolute -z-20 -right-24 bottom-0 size-52 lg:size-80"
				/>


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
