"use client";

import { useState } from "react";
import Image from "next/image";
import love from "@/public/image/loveicon.png";
import share from "@/public/image/shareicon.png";
import ceo from "@/public/image/ceo.jpg";

import Spinner from "../ui/Spinner";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import {
	HiArrowDown,
	HiArrowLeft,
	HiCamera,
	HiCreditCard,
	HiPencil,
} from "react-icons/hi2";
import {
	useCoursePaymentMutation,
	useGetAllCoursesQuery,
	useGetCourseByIdQuery,
	useGetCourseStatusByIdQuery,
	useGetEnrolledCoursesQuery,
} from "@/app/_features/appSlices/apiSlice";
import { formatCurrency, ShareCourse, timeAgo } from "@/lib/helpers";
import { useAppSelector } from "@/app/_hooks/hooks";
import { user as userData } from "@/app/_features/appSlices/userSlice";
import NoListings from "../ui/NoListings";

import Certificate from "../ui/Certificate";
import { TimestampToDateString } from "@/app/_hooks/Helpers";
import { BsInfo } from "react-icons/bs";
import { TbCertificate, TbCertificate2 } from "react-icons/tb";

interface CoursePageProps {
	params: { id: string };
}

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

const CoursesPage = (params: CoursePageProps) => {
	const user = useAppSelector(userData);
	const router = useRouter();

	const userId = user?.id;
	const { currentData: studentCourse, isFetching } = useGetEnrolledCoursesQuery(
		userId,
		{
			// pollingInterval: 3000,
			refetchOnMountOrArgChange: true,
			skip: false,
		}
	);

	const courseId = params?.params?.id;
	sessionStorage.setItem("params", courseId);
	const {
		currentData: courseData,
		isFetching: isFetchingCourse,
		isLoading,
	} = useGetCourseByIdQuery(courseId, {
		// pollingInterval: 3000,
		refetchOnMountOrArgChange: true,
		skip: false,
	});
	const { currentData: courseStatusData } = useGetCourseStatusByIdQuery(
		courseId,
		{
			// pollingInterval: 3000,
			refetchOnMountOrArgChange: true,
			skip: false,
		}
	);

	const timeCompleted = courseStatusData?.completionstatus?.completions?.find(
		(course: any) => course.status === "Yes"
	)?.timecompleted;

	const course = courseData?.data;
	// const course = courses?.find(
	// 	(job: any) => job.id === Number(params.params.id)
	// );

	const [certCourse] =
		studentCourse?.filter((cert: any) => cert.id === course?.course_id) || [];
	// console.log(certCourse);

	const isPaid = studentCourse?.some(
		(paidCourse: any) => paidCourse.id === +courseId
	);

	const isCompleteds = studentCourse?.some(
		(course: any) => course.completed === true && course.progress === 100
	);

	const isCompleted = courseStatusData?.completionstatus?.completed === true;

	const [coursePayment, { isLoading: isPaying, error: paymentError }] =
		useCoursePaymentMutation();

	const isVendor = user?.goals === "List a course";
	const isStudent = user?.goals === "Apply for a job / Take a course";

	function handleBack() {
		router.back();
	}

	function handleShareCourse(courseId: string) {
		ShareCourse(course, courseId);
	}

	async function initiatePayment(courseId: any, price: any) {
		const payData = {
			amount: price,
			course_id: courseId,
		};
		try {
			const res: any = await coursePayment(payData).unwrap();

			window.open(
				res?.authorization_url.toString(),
				"_blank",
				"noopener,noreferrer"
			);
			if (res.success) {
				toast.success("Please kindly proceed to make payment!");
				// router.push(res?.authorization_url.toString());
			}
		} catch (error: any) {
			toast.error(error?.data?.message);
			console.error(error);
		}
	}

	if (isLoading) {
		return <Spinner />;
	}

	if (!course && !isLoading) {
		return (
			<NoListings
				url="/dashboard/courses"
				title="Course not found! :)"
				comment="Please check out other avaialble courses..."
				url_text="Checkout available courses"
			/>
		);
	}

	return (
		<div>
			<main className=" flex flex-col items-center py-10">
				<section className="w-full xl:w-[80%]  ">
					<div
						key={course?.id}
						className="flex flex-col mg:grid grid-rows-2  gap-4 border p-2  md:p-5 rounded-md  lg:h-[850px]- "
					>
						<section className="relative items-center max-md:place-self-center ">
							<Image
								src={
									course?.thumbnail
										? `${IMAGE_URL}/${course?.thumbnail}`
										: "/image/question_mark.jpg"
								}
								alt="company-icon"
								className="w-full h-[7rem]- md:h-[20rem]  rounded-t-lg"
								width={90}
								height={90}
							/>

							{isVendor && (
								<>
									<div className="absolute bottom-0 right-1 z-10 bg-stone-100 rounded p-1 mb-1">
										<HiCamera className="text-3xl text-black" />
									</div>
									<button
										className="absolute bottom-2 right-0 z-20"
										onClick={() => {
											router.push("/vendor-dashboard/upload-thumbnail");
										}}
									>
										<HiPencil className="text-2xl text-yellow-600" />
									</button>
								</>
							)}
						</section>
						<section className="flex flex-col gap-2 md:gap-4">
							{/* <p className=" font-semibold sm:font-bold text-[90%] montserrat capitalize  ">
								{course?.shortname}
								</p> */}
							<p className=" text-xl sm:text-[85%]- montserrat capitalize  py-0.5 font-semibold">
								{course[0]?.displayname}
							</p>
							<div className=" flex flex-col gap-2  items-start py-[.5rem]   text-center-">
								<h2 className="text-[.9rem] font-bold">Summary:</h2>
								<span className="text-[.8rem]  p-1">{course[0]?.summary}</span>
							</div>
							<div className=" flex flex-col gap-2  items-start py-[.5rem]   text-balance-">
								<h2 className="text-[.9rem] font-bold">Requirements:</h2>
								<span className="text-[.8rem] p-1 ">
									{course?.course_requirements}
								</span>
							</div>

							<div className="flex flex-row justify-between">
								<p className=" font-semibold sm:font-bold text-[90%] montserrat capitalize  ">
									<strong>Course by</strong> {course?.course_creator_name}
								</p>
								<button
									className="w-6 h-6"
									onClick={() => handleShareCourse(course?.id)}
								>
									<Image src={share} alt="shareicon" />
								</button>
							</div>
							<div className="flex flex-row justify-between items-center">
								<div className="flex flex-row items-center gap-1 text-xl">
									<HiCreditCard />
									<div className="flex flex-col">
										<p className="sora text-[65%] font-semibold">
											{formatCurrency(course?.price)}
										</p>
									</div>
								</div>

								{/* <p className="text-[#f5cb1a] capitalize text-sm montserrat font-bold">
									{course?.enrolled_users}Blue
								</p> */}
							</div>
							<div className="flex flex-row justify-center items-center">
								{isCompleted && isStudent ? (
									<Certificate
										studentName={`${user?.firstName} ${user?.lastName}`}
										courseName={certCourse?.fullname}
										completionDate={TimestampToDateString(timeCompleted)}
										// completionDate={new Date().toLocaleDateString()}
									/>
								) : !isCompleted && isPaid ? (
									<div className="flex gap-3 justify-center items-center max-md:my-3 text-lg border border-green-600 rounded-lg p-4 shadow-md shadow-yellow-600">
										<span className="text-4xl text-green-700 ">
											<TbCertificate />{" "}
										</span>
										<p className="text-sm md:text-lg">
											Your certificate will appear here after completing this
											course.
										</p>
									</div>
								) : null}

								{/* <p className="text-[#f5cb1a] capitalize text-sm montserrat font-bold">
									{course?.enrolled_users}
								</p> */}
							</div>

							<div className="py-3">
								<button
									className="text-sm absolute- flex px-3  justify-center py-2 rounded border border-gray-900 items-center hover:bg-yellow-500 font-semibold shadow shadow-yellow-500 transition-colors duration-700"
									onClick={handleBack}
								>
									<span className="text-xl">
										<HiArrowLeft />
									</span>
									<span>Go back</span>
								</button>
							</div>
							{isPaid && (
								<>
									<p className="text-sm text-black py-2">
										<strong>Note :</strong> Click button below to proceed with
										the same Jobmingle email address and password to access your
										course!
									</p>
								</>
							)}
							<div className="border-b-[2px]- border-solid border-x-black-100 py-1">
								{isPaid ? (
									<Button
										type="regular"
										onClick={() => {
											window.open(
												"https://courses.jobmingle.co/login/",
												"_blank",
												"noopener,noreferrer"
											);
										}}
									>
										Go to Course
									</Button>
								) : (
									<Button
										type="regular"
										onClick={(e) => {
											e.preventDefault();
											initiatePayment(course?.course_id, course?.price);
										}}
										disabled={isPaying}
									>
										{isPaying ? (
											<span>
												<Spinner />
											</span>
										) : (
											"Enroll"
										)}
									</Button>
								)}
								{/* </button> */}
							</div>
						</section>
					</div>
				</section>
			</main>
		</div>
	);
};

export default CoursesPage;
