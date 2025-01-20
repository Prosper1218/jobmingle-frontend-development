"use client";
import React, { useState } from "react";

import SearchBar from "@/app/_components/ui/SearchBar";
import { HiBookOpen } from "react-icons/hi2";
import Courses from "@/app/_components/course/Courses";

//

const Page = () => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<SearchBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				title="Search your favorite course!"
				placeholder="Course title"
				icon={<HiBookOpen />}
			/>
			<Courses searchQuery={searchQuery} link="dashboard/courses" />
		</>
	);
};

export default Page;
