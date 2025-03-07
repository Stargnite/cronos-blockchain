"use client"

import bgImg from "@/app/images/Icosahedron.png"
import {
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import { useRef } from "react";
import Animation from "./animation"

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
				
				<div className="space-y-9 md:max-w-3xl mx-auto text-center relative z-10">
				 <Animation duration={1} delay={.3} direction="y" reverse={true}>
					<p className="text-sm uppercase tracking-widest text-gray-400 mb-4">WELCOME TO CRONOS</p>
					</ Animation>
					<Animation duration={1} delay={.5} direction="y" reverse={true}>
					 <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-gradient opacity-80">
					 	The Internet of <span>Blockchains.</span>
					 </h1>
					</ Animation>
					<Animation duration={1} delay={.7} direction="y" reverse={true}>
					<p className="text-lg text-gray-300 md:max-w-lg mx-auto">
						Cronos is an ever expanding ecosystem of connected apps and services, built for a decentralized future.
					</p>
				 </ Animation>
				</div>



				<Animation duration={1} delay={1} direction="x" reverse={true}>
				<motion.img
					src={bgImg.src}
					style={{
						translateY: translateY,
					}}
					alt="background image"
					className="absolute z-20 left-0 md:left-20 top-20 size-10 lg:size-32 animate-pulse"
				/>
			 </ Animation>
				<Animation duration={1} delay={1} direction="x">
				 <motion.img
					src={bgImg.src}
					style={{
						translateY: translateY,
					}}
					alt="background image"
					className="absolute -z-20 -right-24 bottom-0 size-52 lg:size-80"
				 />
				</ Animation>





			</div>
		</section>
	)
}

export default Hero
