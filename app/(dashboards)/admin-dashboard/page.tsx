"use client";

import Spinner from "@/app/_components/ui/Spinner";
import { useFetchUsersQuery } from "@/app/_features/appSlices/adminSlice";
import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";

// Chart data type
type ChartData = {
	name: string;
	Vendors: number;
	Employees: number;
	Students: number;
};

const AccountDashboard = () => {
	// Fetch users data
	const { data: usersResponse, isLoading, error } = useFetchUsersQuery({});

	// Loading or Error states
	if (isLoading) {
		return <Spinner />;
	}

	if (error) {
		return <div>Error loading data. Please try again later.</div>;
	}

	// Extract users from the response
	const users = usersResponse?.data || [];

	// Compute totals for the cards
	const totalVendors = users.filter(
		(user: any) => user.goals === "List a course"
	).length;
	const totalEmployees = users.filter(
		(user: any) => user.goals === "Post a job"
	).length;
	const totalStudents = users.filter(
		(user: any) => user.goals === "Apply for a job / Take a course"
	).length;
	const totalUsers = users.length;

	// Example chart data
	const chartData = [
		{
			name: "Sep",
			totalUsers,
			totalStudents,
			totalEmployees,
			totalVendors,
		},
		{
			name: "Oct",
			totalUsers,
			totalStudents,
			totalEmployees,
			totalVendors,
		},
		{
			name: "Nov",
			totalUsers,
			totalStudents,
			totalEmployees,
			totalVendors,
		},
		{
			name: "Dec",
			totalUsers,
			totalStudents,
			totalEmployees,
			totalVendors,
		},
	];

	return (
		<div className=" flex flex-col gap-[3rem] md:gap-[5rem] mx-auto md:p-9 w-full">
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 mb-6 text-stone-200">
				<div className="w-full h-28  border-l-4 border-t border-blue-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-blue-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-blue-500  rounded-lg  ">
						<p className="text-2xl">{totalUsers}</p>
						<h3 className="text-md font-bold translate-x-6">
							Total <br /> Users
						</h3>
					</div>
				</div>

				<div className="w-full h-28  border-l-4 border-t border-green-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-green-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-green-500  rounded-lg  ">
						<p className="text-2xl">{totalVendors}</p>
						<h3 className="text-md font-bold translate-x-6">
							Total <br /> Vendors
						</h3>
					</div>
				</div>
				<div className="w-full h-28  border-l-4 border-t border-yellow-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-yellow-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-yellow-500  rounded-lg  ">
						<p className="text-2xl">{totalEmployees}</p>
						<h3 className="text-md font-bold translate-x-6">
							Total <br /> Employees
						</h3>
					</div>
				</div>
				<div className="w-full h-28  border-l-4 border-t border-red-600 rounded-lg p-[2.5px]   shadow-md- shadow-inner shadow-red-500 ">
					<div className="w-full h-full flex flex-col justify-center pl-5 bg-red-500  rounded-lg  ">
						<p className="text-2xl">{totalStudents}</p>
						<h3 className="text-md font-bold translate-x-6">
							Total <br /> Students
						</h3>
					</div>
				</div>
			</div>

			{/* Bar Chart */}
			<div className="w-full h-96 ">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={chartData}>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="totalUsers" fill="#dc2626" radius={[5, 5, 0, 0]} />
						<Bar dataKey="totalStudents" fill="#3b82fc" radius={[5, 5, 0, 0]} />
						<Bar
							dataKey="totalEmployees"
							fill="#22c55e"
							radius={[5, 5, 0, 0]}
						/>
						<Bar dataKey="totalVendors" fill="#eab308" radius={[5, 5, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default AccountDashboard;
