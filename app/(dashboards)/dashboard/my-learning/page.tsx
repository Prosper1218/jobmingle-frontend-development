"use client";
import React, { useEffect, useState } from "react";
import { HiBookOpen, HiBriefcase } from "react-icons/hi2";
import SearchBar from "@/app/_components/ui/SearchBar";

import MyCourses from "@/app/_components/course/MyCourse";

//

const Page = () => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<SearchBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				title="Search library"
				placeholder="course title"
				icon={<HiBookOpen />}
			/>
			<MyCourses searchQuery={searchQuery} link="dashboard/my-learning" />
		</>
	);
};

export default Page;
