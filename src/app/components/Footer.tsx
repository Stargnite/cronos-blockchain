import type React from "react"
import Link from "next/link"

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link href={href} className="block py-1.5 text-white/60 transition-colors hover:text-white">
      {children}
    </Link>
  )
}

interface FooterColumnProps {
  title: string
  links: { label: string; href: string }[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="mb-8 min-w-[140px] md:mb-0">
      <h3 className="mb-4 text-lg font-medium text-white">{title}</h3>
      <div className="space-y-1">
        {links.map((link) => (
          <FooterLink key={link.label} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  const footerData = [
    {
      title: "Learn",
      links: [
        { label: "Introduction", href: "/introduction" },
        { label: "Features", href: "/features" },
        { label: "Staking", href: "/staking" },
        { label: "Get HEDRON", href: "/get-hedron" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Build",
      links: [
        { label: "Developer Portal", href: "/developer-portal" },
        { label: "Ignite CLI", href: "/ignite-cli" },
        { label: "Cronos SDK", href: "/cronos-sdk" },
        { label: "IBC Protocol", href: "/ibc-protocol" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Tokens", href: "/tokens" },
        { label: "Apps & Services", href: "/apps-services" },
        { label: "Wallets", href: "/wallets" },
        { label: "Gravity DEX", href: "/gravity-dex" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Participate",
      links: [
        { label: "Community", href: "/community" },
        { label: "Contributors", href: "/contributors" },
        { label: "Events", href: "/events" },
        { label: "Newsletters", href: "/newsletters" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "About", href: "/about" },
        { label: "Press Kit", href: "/press-kit" },
        { label: "Design", href: "/design" },
        { label: "Resources", href: "/resources" },
      ],
    },
  ]

  return (
    <footer className="w-full bg-black px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {footerData.map((column) => (
            <FooterColumn key={column.title} title={column.title} links={column.links} />
          ))}
        </div>
      </div>
    </footer>
  )
}

