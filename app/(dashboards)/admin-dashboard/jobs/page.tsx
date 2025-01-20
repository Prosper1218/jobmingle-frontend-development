"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { formatCurrency, timeAgo } from "@/lib/helpers";
import { useGetAllJobsQuery } from "@/app/_features/appSlices/adminSlice";
import {
	useFetchUsersQuery,
	useUpdateJobStatusMutation,
} from "@/app/_features/appSlices/adminSlice";
import Spinner from "@/app/_components/ui/Spinner";
import NoListings from "@/app/_components/ui/NoListings";

const Joblist = () => {
	const [selectedJob, setSelectedJob] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const totalTarget = 10;

	const [updateJobStatus] = useUpdateJobStatusMutation();

	const { data: usersResponse, isLoading, error } = useGetAllJobsQuery({});

	const jobsData = usersResponse?.data || [];
	const isAdmin = true;

	const jobsApproved = jobsData?.filter(
		(job: any) => job.status === "approved"
	).length;
	const jobsRejected = jobsData?.filter(
		(job: any) => job.status === "rejected"
	).length;
	const openModal = (job: any) => {
		setSelectedJob(job);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedJob(null);
	};

	async function handleApprove(job: any) {
		try {
			if (job?.status !== "approved") {
				const res: any = await updateJobStatus({
					jobId: job.id,
					status: "approved",
				}).unwrap();
				if (res?.status === "success")
					toast.success("Job approved successfully");
			}
		} catch (error: any) {
			toast.error(
				error?.data?.message || "An error occured while performing request!"
			);
			console.error(error);
		}
	}
	async function handleReject(job: any) {
		try {
			if (job?.status !== "rejected") {
				const res: any = await updateJobStatus({
					jobId: job.id,
					status: "rejected",
				}).unwrap();

				if (res?.status === "success")
					toast.success("Job rejected successfully");
			}
		} catch (error: any) {
			toast.error(
				error?.data?.message || "An error occured while performing request!"
			);
			console.error(error);
		}
	}

	const deleteJob = (id: number) => {
		// Placeholder for delete functionality
	};

	const progressData = [
		{ name: "Job Listings", value: jobsData?.length },
		{
			name: "Remaining Target",
			value: totalTarget - jobsData?.length,
		},
	];

	if (isLoading) {
		return <Spinner />;
	}

	if (error) {
		return (
			<NoListings
				url="/dashboard"
				title="Error loading jobs at the moment :)"
				comment="Please refresh your page or wait for network..."
				url_text="Go Home"
			/>
		);
	}

	return (
		<div className="container mx-auto md:p-6">
			<div className="flex flex-col lg:flex-row gap-6 mb-12">
				{/* Overview Section */}
				<div className="bg-gray-100 rounded-lg p-6 shadow-lg flex-1 ">
					<p className="text-xl font-semibold text-gray-700 mb-2">
						Job Listings Overview
					</p>
					<p className="text-gray-600 mb-4">
						Number of jobs: {jobsData?.length}
					</p>
				</div>

				{/* Approved jobs Section */}
				<div className="bg-green-100 p-6 rounded-lg shadow-lg flex-1">
					<h3 className="text-xl font-semibold text-green-700 mb-2">
						Approved jobs
					</h3>
					<p className="text-green-600 ">{jobsApproved}</p>
				</div>
				<div className="bg-green-100 p-6 rounded-lg shadow-lg flex-1">
					<h3 className="text-xl font-semibold text-red-700 mb-2">Rejected</h3>
					<p className="text-red-600 ">{jobsRejected}</p>
				</div>
			</div>

			{/* Job Cards Section */}
			<section className="flex flex-row flex-wrap gap-6 justify-between mb-12">
				{jobsData?.map((job: any) => (
					<div
						key={job.id}
						className="flex flex-col bg-white rounded-lg shadow-lg p-6 w-full sm:w-1/2 md:w-1/3 lg:w-[30%] transition transform hover:scale-105 hover:shadow-2xl"
						onClick={() => openModal(job)}
					>
						<div className="mb-4 flex items-center">
							<Image
								height={500}
								width={500}
								src="/image/logo.png"
								alt="company-icon"
								className="w-10 h-10"
							/>
							<div className="text-lg font-semibold capitalize ml-3 text-gray-700">
								<h2 className="big">{job.company_name}</h2>
							</div>
						</div>
						<div className="font-semibold text-2xl capitalize text-gray-800 mb-2">
							<p className="small">{job.job_type}</p>
						</div>
						<div className="txt-1 flex items-center gap-5">
							<h2 className="big-1">Job Title:</h2>
							<span className="big-1">{job.job_role}</span>
						</div>
						<div className="txt-2 flex gap-5 items-center">
							<h2 className="big-1">Salary:</h2>
							<span className="small">{formatCurrency(job.salary)}</span>
						</div>
						<div className="txt-2 flex gap-5 items-center">
							<h2 className="big-1">Posted:</h2>
							<p className="small">{timeAgo(job.created_at)}</p>
						</div>
						<div className="flex justify-between items-center mt-4">
							<button
								className={`font-semibold px-4 py-2 rounded-md transition-colors ${
									job.status === "approved"
										? "bg-gray-300 text-gray-600 cursor-not-allowed"
										: "bg-green-500 text-white hover:bg-green-600"
								}`}
								onClick={() => handleApprove(job)}
								disabled={job.status === "approved"}
							>
								{job.status === "approved" ? "Approved" : "Approve"}
							</button>
							<button
								className={`font-semibold px-4 py-2 rounded-md transition-colors ${
									job.status === "rejected"
										? "bg-gray-300 text-gray-600 cursor-not-allowed"
										: "bg-red-500 text-white hover:bg-red-600"
								}`}
								onClick={() => handleReject(job)}
								disabled={job.status === "rejected"}
							>
								{job.status === "rejected" ? "Rejected" : "Reject"}
							</button>
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default Joblist;
