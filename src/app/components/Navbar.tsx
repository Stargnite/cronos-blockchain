import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center justify-between text-white w-full">
						<Link href="/" className="">
							CRONOS
						</Link>
						<div className="hidden md:block ml-10">
							<div className="flex items-center gap-x-20">
								<Link href="#" className="nav-btn-hover">Learn</Link>
								<Link href="#" className="nav-btn-hover">Build</Link>
								<Link href="#" className="nav-btn-hover">Explore</Link>
							</div>
						</div>
						<p className="">
							Get CRONOS <span>{">"}</span>
						</p>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
