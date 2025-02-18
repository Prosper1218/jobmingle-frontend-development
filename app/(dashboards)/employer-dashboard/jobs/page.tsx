"use client";
import React, { useEffect, useState } from "react";
import { HiBriefcase } from "react-icons/hi2";
import SearchBar from "@/app/_components/ui/SearchBar";
import JobItems from "@/app/_components/job/EmployerJobs";

//

const Page = () => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<SearchBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				title="Search job list!"
				placeholder="Job title"
				icon={<HiBriefcase />}
			/>
			<JobItems searchQuery={searchQuery} link="employer-dashboard/jobs" />
		</>
	);
};

export default Page;
