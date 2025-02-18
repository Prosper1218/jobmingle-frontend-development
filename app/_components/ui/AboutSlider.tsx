"use client";

import Image from "next/image";
import Head from "next/head";
import { slides } from "@/lib/_exportLinks";
import Carousel from "./Carousel";

function AboutUs() {
	return (
		<div className="flex flex-col items-center  justify-center md:mb-[7rem]">
			<div className="check relative z-20 w-full text-center max-m:w-[287px]">
				<div></div>{" "}
				<Carousel autoSlide={true}>
					{slides.map((slide, index) => (
						<div key={index} className="relative w-full flex-shrink-0">
							<Image
								src={slide.imagesone}
								className="w-full h-[200px] md:h-[450px] object-cover"
								alt={`Slide ${index}`}
								width={1000}
								height={500}
							/>
							<div className="absolute inset-0 bg-black opacity-50"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<h2 className="text-white text-4xl font-bold max-md:text-[14px] max-md:font-semibold ">
									{slide.headerText}
								</h2>
							</div>
						</div>
					))}
				</Carousel>
				<div className="z-10 w-96 h-96 opacity-80 bg-[#f5cb1a] rounded-full blur-[190px] absolute top-[150%] max-md:hidden" />
			</div>
		</div>
	);
}

export default AboutUs;
