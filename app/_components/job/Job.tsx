"use client";
import { formatCurrency, ShareJob, timeAgo } from "@/lib/helpers";

import Image from "next/image";
import share from "@/public/image/shareicon.png";
import Link from "next/link";
import Button from "@/app/_components/ui/Button";
import {
	HiArrowLeft,
	HiMiniArrowTopRightOnSquare,
	HiPencil,
} from "react-icons/hi2";
import { useRouter } from "next/navigation";
import Spinner from "../ui/Spinner";

import { HiTrash } from "react-icons/hi";
import { useState } from "react";
import EditJobForm from "../ui/EditJobForm";
import {
	useDeleteJobMutation,
	useGetAllJobsQuery,
	useGetJobByIdQuery,
} from "@/app/_features/appSlices/apiSlice";
import { useAppSelector } from "@/app/_hooks/hooks";
import { user as userData } from "@/app/_features/appSlices/userSlice";
import EditJobFormModal from "../ui/EditJobFormModal";
import { formatUrl, JobTypes } from "@/app/_hooks/Helpers";
import toast from "react-hot-toast";
import NoListings from "../ui/NoListings";
import Modal from "../ui/Modal";
import ConfirmDelete from "../ui/ConfirmDelete";

interface JobPageProps {
	params: { id: string };
}

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export default function JobDetails(params: JobPageProps) {
	const [showForm, setShowForm] = useState(false);
	const [Active, setActive] = useState(false);

	const router = useRouter();
	const user = useAppSelector(userData);

	const jobId = params?.params?.id;

	const {
		currentData: jobData,
		isFetching: isFetchingJob,
		isLoading,
	} = useGetJobByIdQuery(jobId, {
		// pollingInterval: 3000,
		refetchOnMountOrArgChange: true,
		skip: false,
	});
	const job = jobData?.data;

	const [deleteJob, { isLoading: isDeletingJob }] = useDeleteJobMutation();

	const isEmployer = user?.goals === "Post a job";
	const isStudent = user?.goals === "Apply for a job / Take a course";

	if (isLoading) {
		return <Spinner />;
	}

	if (!job && !isLoading) {
		return (
			<NoListings
				url="/dashboard/jobs"
				title="Job not found! :)"
				comment="Please check out other avaialble jobs..."
				url_text="Checkout available jobs"
			/>
		);
	}

	function handleShareJob(jobId: any) {
		ShareJob(job, jobId);
	}

	async function handleDeleteJob(id: any) {
		try {
			const res: any = await deleteJob(id).unwrap();
			toast.success(res?.message);
			router.push("/employer-dashboard/jobs");
		} catch (error: any) {
			toast.error(
				error?.data?.message || "An error occured while performing request!"
			);
			console.error(error);
		}
	}

	function handleBack() {
		router.back();
	}
	return (
		<div className="relative flex flex-col items-center md:pt-4 pb-10 ">
			{Active ? (
				<EditJobFormModal setActive={setActive} jobId={job?.id} />
			) : null}
			<div className="w-full xl:w-[80%]  ">
				<div className=" flex flex-col ">
					<div className="flex flex-col p-[1rem]   rounded-2xl  w-[100%]  relative shadow-lg- transition transform  ">
						<div className="flex gap-[1rem] border-b border-gray-900 py-[1rem] ">
							<div className="logo h-[4rem] w-[4rem]  rounded-full p-[0.6rem] border border-gray-900 ">
								<Image
									alt="jobmingle"
									src="/image/logo.png"
									width={90}
									height={90}
									className="image"
								/>
							</div>
							<div className="flex flex-col gap-[.1rem]">
								<h2 className="text-xl font-bold ">{job?.company_name}</h2>
								<h2 className="text-sm text-yellow-400 font-bold ">
									<Link
										target="_blank"
										href={formatUrl(`${job?.company_site}`)}
									>
										{job?.company_site}
									</Link>
								</h2>
								{/* <h2 className="big">{job?.platform}</h2> */}

								<div className=" flex items-start py-[.5rem]  gap-5 items-center-">
									<p className="text-[1rem] font-bold ">{job?.job_type}</p>
									{/* <h2 className="text-[.9rem] font-bold">Posted:</h2> */}
									<p className="text-[.8rem] font-bold text-stone-500">
										{timeAgo(job?.created_at)}
									</p>
									<p className="text-[.8rem] font-bold text-stone-500 ">
										{formatCurrency(job?.salary)}
									</p>
								</div>
							</div>
						</div>
						<div className=" flex py-[.5rem] items-center-  gap-5 mt-5">
							<h2 className="text-[.9rem] font-bold">Job Title:</h2>
							<span className="text-[.8rem] ">{job?.job_role}</span>
						</div>
						<div className=" flex flex-col gap-2 items-start py-[.5rem]   items-center-">
							<h2 className="text-[.9rem] font-bold">Description:</h2>
							<span className="text-[.8rem]  ">
								{job?.job_description
									.replace(/\d+\.\s*/g, "")
									.replace(/(\d+)\.(\w)/g, (_: any, word: any) => `${word}`)
									.replace(/\s{2,}/g, " ")
									.toLowerCase()
									.replace(
										/(^|[.?!]\s+)([a-z])/g,
										(_: any, prefix: any, letter: any) =>
											`${prefix}${letter.toUpperCase()}`
									)
									.trim()}
							</span>
						</div>
						<div className=" flex flex-col gap-2  items-start py-[.5rem]   items-center-">
							<h2 className="text-[.9rem] font-bold">Responsibilities:</h2>

							<span className="text-[.8rem]  ">
								<ul
									style={{
										marginTop: "10px",
										listStyle: "disc",
										paddingLeft: "20px",
									}}
								>
									{/* {job?.job_responsibilities} */}
									{job?.job_responsibilities
										.replace(/\n/g, " ")
										.split(/(?:\d+\.?\s*|\n)/)
										.map((item: any) => item.trim())
										.filter((item: any) => item)
										.map((item: string, index: number) => (
											<li key={index} className="mb-1">
												{item
													.toLowerCase()
													.replace(
														/(^|[.?!]\s+)([a-z])/g,
														(_, prefix, letter) =>
															`${prefix}${letter.toUpperCase()}`
													)}
											</li>
										))}
								</ul>
							</span>
						</div>

						<div className=" flex items-center py-[.5rem]  gap-5 items-center-">
							<h2 className="text-[.9rem] font-bold">Salary:</h2>
							<span className="text-[.8rem] font-bold ">
								{formatCurrency(job?.salary)}
							</span>
						</div>
						<div className=" flex items-center py-[.5rem]  gap-5 items-center-">
							<h2 className="text-[.9rem] font-bold">Posted:</h2>
							<p className="text-[.9rem] font-bold ">
								{timeAgo(job?.created_at)}
							</p>
						</div>

						<div className=" flex justify-between w-full py-5">
							<button
								className="text-sm absolute- flex px-3  justify-center py-2 rounded border border-gray-900 items-center hover:bg-yellow-500 font-semibold shadow shadow-yellow-500 transition-colors duration-700"
								onClick={handleBack}
							>
								<span className="text-xl">
									<HiArrowLeft />
								</span>
								<span>Go back</span>
							</button>
							<div className="flex flex-row justify-end gap-3 m-1 py-1 mr-4 ">
								<button
									className="w-5 h-5"
									onClick={() => handleShareJob(job?.id)}
								>
									<Image src={share} alt="shareicon" />
								</button>
							</div>
							{isEmployer && (
								<div className=" flex items-center px-[.5rem] justify-center w-[100%]-  ">
									<div className="flex gap-3 border- px-2 items-center">
										{/* <Button type="login"> */}
										<button
											className="text-xl hover:text-yellow-500 transition-all duration-700 border p-1 rounded"
											onClick={() => setActive((active) => !active)}
										>
											<HiPencil />
										</button>

										<Modal>
											<Modal.Open opens="delete">
												<button className="text-xl hover:text-red-500 transition-all duration-700 border p-1 rounded">
													<HiTrash />
												</button>
											</Modal.Open>
											<Modal.Window name="delete">
												<ConfirmDelete
													resourceName="job"
													disabled={isDeletingJob}
													onConfirm={() => handleDeleteJob(job?.id)}
												/>
											</Modal.Window>
										</Modal>
										{/* </Button>  */}
									</div>
								</div>
							)}
						</div>
						{isStudent && job?.job_email ? (
							<div
								className={`flex flex-row ${
									job?.job_link ? "justify-end" : "justify-center "
								} gap-3- m-1 py-1`}
							>
								<div className="   ">
									<Link
										href={`mailto:${job.job_email}`}
										className=" flex  gap-2 text-yellow-400 hover:text-yellow-600 hover:underline border border-yellow-600 rounded px-2 py-4"
									>
										Apply with email
										<span className="text-xl">
											<HiMiniArrowTopRightOnSquare />
										</span>
									</Link>
								</div>
							</div>
						) : null}

						{isStudent && job?.job_link ? (
							<div className="lg:m-auto lg:w-[50%] px-10 ">
								{/* <Link
									href={`mailto:${job.job_email}`}
									className="text-yellow-500"
								>
									<Button type="login">
										Apply
										<span className="text-xl">
											<HiMiniArrowTopRightOnSquare />
										</span>
									</Button>
								</Link> */}
								<Link
									// href={job?.job_link}
									href={formatUrl(job?.job_link)}
									// href={`https://www.${job?.job_link}`}
									target="_blank"
									className="text-yellow-500"
								>
									<Button type="login">
										Apply
										<span className="text-xl">
											<HiMiniArrowTopRightOnSquare />
										</span>
									</Button>
								</Link>
							</div>
						) : null}

						{showForm && <EditJobForm jobId={job.id} />}
					</div>
				</div>
			</div>
		</div>
	);
}
