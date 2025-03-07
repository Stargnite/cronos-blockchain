"use client"

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Sphere from "@/app/images/sphere.png"
import Animation from "./animation"

interface CommunityLinkProps {
  title: string
  description: string
  href: string
}

function CommunityLink({ title, description, href }: CommunityLinkProps) {
  return (
    <Link
      href={href}
      className="group block py-6 transition-all duration-200 hover:bg-zinc-900/50 -mx-4 px-4 rounded-lg relative"
    >
      {/* Hover gradient border */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-medium group-hover:text-purple-200 transition-colors duration-200">{title}</h3>
          <ArrowUpRight className="w-4 h-4 text-zinc-600 transition-all duration-200 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="text- text-zinc-500 group-hover:text-zinc-400 transition-colors duration-200">{description}</p>
      </div>
    </Link>
  )
}

export default function CommunitySection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const communityLinks = [
    {
      title: "Community Chat",
      description: "Ask general questions and chat with the worldwide community on Telegram.",
      href: "#telegram",
    },
    {
      title: "Twitter",
      description: "Follow @cronos to get the latest news and updates from across the ecosystem.",
      href: "#twitter",
    },
    {
      title: "Developer Chat",
      description: "Have technical questions about Cronos tools? Ask a developer on the Discord.",
      href: "#discord",
    },
    {
      title: "Cronos Forum",
      description: "Thinking about becoming a validator or interested in network matters?",
      href: "#forum",
    },
  ]

  return (
    <section
      ref={heroRef}
      className="bg-black text-white relative">
      {/* Purple gradient circle */}
      <div className="absolute -left-44 lg:-left-80 top-20 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]">
      <Animation duration={1} delay={.5} direction="x" reverse={true}>
        <motion.img
          style={{
            translateY: translateY,
          }}
          src={Sphere.src}
          alt=""
        />
        </ Animation>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient opacity-80">Meet the worldwide community.</h2>
            <p className="text-lg text-zinc-300 max-w-md">
              Join a fast-growing community of developers and innovators connected all over the world, building the new
              era of the internet.
            </p>
            <Link
              href="#community"
              className="inline-flex items-center text-lg font-medium hover:text-purple-200 transition-colors group"
            >
              Community
              <ArrowUpRight className="ml-1 w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            {communityLinks.map((link, index) => (
              <CommunityLink key={index} title={link.title} description={link.description} href={link.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

