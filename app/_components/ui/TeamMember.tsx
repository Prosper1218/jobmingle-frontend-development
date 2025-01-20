"use client";
import Image from "next/image";
import { teamMembers } from "@/lib/_exportLinks";
import Slider from "react-slick";

interface TeamMember {
	name: string;
	src: string;
	role: string;
}

export default function TeamSection() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 1,
		// nextArrow: <NextArrow />,
		// prevArrow: <PrevArrow />,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					speed: 800,
					dots: true,
				},
			},
			{
				breakpoint: 820,
				settings: {
					speed: 800,
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 1000,
				},
			},
		],
	};

	return (
		<div className="flex flex-col w-full  items-center justify-center px-4  mt-16 md:mt-32 overflow-hidden ">
			<div className="container w-full md:max-w-7xl   ">
				<div
					data-aos="fade-up"
					className="flex flex-col justify-center items-center w-full lg:w-6/12 m-auto px-4"
				>
					<h1 className="text-gray-900 text-4xl font-bold mb-4">
						Meet the Team
					</h1>
					<p className="text-gray-700 text-sm md:text-lg font-light px-5 text-center">
						With years of combined experience, we&#39;ve got a well-seasoned
						team at the helm.
					</p>
				</div>
				<div className="flex  items-center justify-center max-md:flex-col space-x-4 py-4  custom-scrollbar-">
					{/* <Slider {...settings}> */}
					<div className="w-full  lg:w-[85%] m-auto ">
						<Slider {...settings}>
							{teamMembers?.map((member: any, index: any) => (
								<div
									key={index}
									data-aos="zoom-in"
									className="flex-shrink-0 w-[300px] md:w-6/12 lg:w-3/12 mb-6 px-3 sm:px-6 lg:px-4"
								>
									<TeamCard member={member} />
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
}

interface MemberProps {
	member: TeamMember;
}

const TeamCard: React.FC<MemberProps> = ({ member }) => {
	return (
		<div key={member.name} className="flex flex-col items-center">
			<Image
				className="rounded-2xl h-[300px] object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
				src={member.src}
				alt={`${member.name} photo`}
				width={300}
			/>
			<div className="text-center  mt-6">
				<h1 className="text-gray-900 text-xl font-bold mb-1">{member.name}</h1>
				<div className="w-[40%] items-center h-[2px] bg-[#eab308] "></div>
				<div className="text-gray-700 font-light mb-2">{member.role}</div>
			</div>
		</div>
	);
};
