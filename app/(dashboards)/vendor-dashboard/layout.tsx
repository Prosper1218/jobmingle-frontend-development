"use client";
import Nav from "./Nav";
import Logo from "@/app/_components/ui/Logo";
import HeaderDash from "@/app/_components/ui/HeaderDash";
import Jmlogo from "@/public/image/jobmingle.png";
import Link from "next/link";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex flex-col lg:grid lg:grid-cols-[15rem_1fr] lg:grid-rows-[auto_1fr]   h-[100vh] overflow-hidden">
			<header className=" max-md:fixed max-md:right-0 max-md:left-0 max-md:top-0 z-[2] ">
				<HeaderDash />
			</header>
			<aside className="hidden lg:flex lg:flex-col  gap-[3.2rem] lg:row-span-full pt-[3.2rem]  bg-gray-400">
				<Link href={"/"}>
					<Logo path={Jmlogo} width={120} height={120} />
				</Link>
				<Nav />
			</aside>
			<main className="p-[.5rem] max-md:pt-[6.4rem]  max-lg:pb-[6.4rem]  overflow-y-auto overflow-x-clip">
				<div className="max-w-[120rem] mx-auto flex flex-col ">{children}</div>
			</main>
			<footer className="lg:hidden bg-gray-300 h-[80px]  fixed right-0 left-0 bottom-0 z-[2]">
				<Nav />
			</footer>
		</main>
	);
}
