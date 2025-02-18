"use client";
import Nav from "./Nav";
import HeaderDash from "@/app/_components/ui/HeaderDash";

import Logo from "@/app/_components/ui/Logo";
import Jmlogo from "@/public/image/jobmingle.png";
import Link from "next/link";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex flex-col  lg:grid lg:grid-cols-[15rem_1fr] min-h-screen h-screen lg:grid-rows-[auto_1fr]  overflow-hidden">
			<header className=" max-md:fixed max-md:right-0 max-md:left-0 max-md:top-0 z-[2] ">
				<HeaderDash />
			</header>
			<aside className="hidden lg:flex lg:flex-col  gap-[3.2rem] lg:row-span-full pt-[3.2rem]  bg-gray-400">
				<Link href="/">
					<Logo path={Jmlogo} width={120} height={120} />
				</Link>
				<Nav />
			</aside>

			<main className="p-[.5rem] max-md:pt-[6.4rem]  max-lg:pb-[6.4rem]  overflow-y-auto overflow-x-clip">
				<div className="max-w-[120rem] mx-auto flex flex-col ">{children}</div>
			</main>

			{/* <div className="p-[.5rem] lg:p-[1rem]  mx-auto max-w-[120rem] ">
				{children}
			</div> */}

			{/* <div className="flex-1 overflow-y-auto pb-[5rem] max-md:mt-24">
				<div className="p-4 sm:p-6 lg:p-8 mx-auto w-full max-w-[120rem]">
					{children}
				</div>
			</div> */}

			<footer className="lg:hidden bg-gray-300   fixed right-0 left-0 bottom-0 z-[2]">
				<Nav />
			</footer>
		</main>
	);
}
