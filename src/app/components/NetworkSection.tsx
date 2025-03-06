import { Link2, Layers, Shield } from "lucide-react"

export default function NetworkSection() {
  const features = [
    {
      label: "CONNECT",
      title: "Connect chains",
      description: "Grow the economy of your chain by connecting to Cronos Hub services using IBC protocol.",
      icon: Link2,
    },
    {
      label: "INTEGRATE",
      title: "Provide services",
      description: "Get support to bring users to Cronos by providing services such as exchanges, wallets and more.",
      icon: Layers,
    },
    {
      label: "VALIDATE",
      title: "Validator level",
      description:
        "Join the ranks of trusted decentralized validator operators in the network and help secure the interchain.",
      icon: Shield,
    },
  ]

  return (
    <section className="bg-black text-white py-16 md:py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-20 lg:mb-24 tracking-tight 
        bg-gradient-to-br from-white to-gray-600 text-transparent bg-clip-text
      ">
          Join the network.
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 rounded-lg p-6 md:p-8 flex flex-col min-h-[280px] transition-all duration-300 hover:bg-zinc-900/80"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-zinc-800/0 to-zinc-800/0 group-hover:from-zinc-700/20 group-hover:to-transparent transition-all duration-300" />

              {/* Content */}
              <div className="relative">
                {/* Label */}
                <span className="inline-block text-xs text-zinc-500 uppercase tracking-wider mb-4 transition-colors group-hover:text-zinc-400">
                  {feature.label}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors group-hover:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm md:text-base flex-grow transition-colors group-hover:text-zinc-300">
                  {feature.description}
                </p>

                {/* Icon */}
                <div className="mt-6 transform transition-all duration-300 group-hover:translate-y-[-2px]">
                  <feature.icon
                    className="w-6 h-6 text-zinc-600 transition-colors group-hover:text-zinc-400"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

