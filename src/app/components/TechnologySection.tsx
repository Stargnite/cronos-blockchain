"use client"

import Cylinder from "@/app/images/Cylinder.png"
import {
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import { useRef } from "react";
import Animation from "./animation"

export default function TechnologySection() {
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


	return (
		<section
			ref={heroRef}
			className="relative text-white">
			{/* Purple gradient blob */}
			<div className="absolute top-0 md:-right-80 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
			<Animation duration={1} delay={.5} direction="x">
				<motion.img
					src={Cylinder.src}
					style={{
						translateY: translateY,
					}}
					alt=""
				/>
				</ Animation>
			</div>

			<div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="flex flex-wrap items-center py-10 lg:py-0 lg:space-x-40 justify-between">
						<div className="space-y-6 mb-16 md:mb-24 lg:mb-32 max-w-[500px]">
						<Animation duration={1} delay={.5} direction="x" reverse={true}>
							<span className="text-sm text-zinc-500 uppercase tracking-wider">Technology</span>
							</ Animation>
							<Animation duration={1} delay={.5} direction="x" reverse={true}>
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-2xl text-gradient">
								The most trusted way to build value.
							</h2>
							</ Animation>

							<Animation duration={1} delay={.5} direction="x" reverse={true}>
							<div className="max-w-2xl space-y-4 text-zinc-300 text-lg">
								<p>
									Cronos is a state-of-the-art blockchain framework that powers the Cronos Hub and its rapidly expanding
									orbit of sovereign chains.
								</p>
								<p>
									Developers can use the SDK to build innovative applications that create value through exchange with the
									Cronos Hub.
								</p>
							</div>
							</ Animation>
						</div>


						<Animation duration={1} delay={.7} direction="x" >
						<div className="space-y-3">
							<span className="text-sm text-white uppercase tracking-wider">Proof of Stake</span>
							<div className="flex items-baseline gap-1">
								<span className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient opacity-80">99</span>
								<span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient opacity-80">%</span>
							</div>
							<p className="text-zinc-300 text-lg">Lower carbon footprint</p>
						</div>
						</ Animation>
					</div>

					{/* Stats Grid */}
					<div className="flex justify-between flex-wrap gap-y-10">
						{/* Low Fees */}
						<Animation duration={1} delay={.5} direction="x" reverse={true}>
						<div className="space-y-3">
							<span className="text-sm text-zinc-500 uppercase tracking-wider">Low Fees</span>
							<div className="flex items-baseline">
								<span className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient">$0.01</span>
							</div>
							<p className="text-zinc-300 text-lg max-w-48">Enjoy the lowest fees - almost zero</p>
						</div>
						</ Animation>

						{/* Fast Transactions */}
						<Animation duration={1} delay={.5} direction="x">
						<div className="space-y-3">
							<span className="text-sm text-zinc-500 uppercase tracking-wider">Fast Transactions</span>
							<div className="flex items-baseline gap-1">
								<span className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient opacity-80">5</span>
								<span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient opacity-80">sec</span>
							</div>
							<p className="text-zinc-300 text-lg max-w-48">Transactions confirmed in seconds</p>
						</div>
						</ Animation>
					</div>
				</div>
			</div>
		</section>
	)
}

