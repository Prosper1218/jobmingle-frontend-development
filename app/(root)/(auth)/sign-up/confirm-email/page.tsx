"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

import arrowback from "@/public/image/arrowback.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Timer from "@/Components/Timer";

import Spinner from "@/app/_components/ui/Spinner";
import Button from "@/app/_components/ui/Button";
import toast from "react-hot-toast";
import {
	useResendVerificationPinMutation,
	useVerifyEmailMutation,
} from "@/app/_features/appSlices/apiSlice";

function Page() {
	const [timeLeft, setTimeLeft] = useState(1 * 60);
	const [isVisible, setIsVisible] = useState(true);
	const [otp, setOtp] = useState(new Array(4).fill(""));
	const router = useRouter();
	const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
	const userEmail = sessionStorage.getItem("userEmail")
		? sessionStorage.getItem("userEmail")
		: "";

	const [verifyEmail, { isLoading: isVerifying }] = useVerifyEmailMutation();

	const [resendVerificationPin, { isLoading: isResending, error }] =
		useResendVerificationPinMutation();

	function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
		if (/^\d?$/.test(e.target.value)) {
			// Ensure only a single numeric value is entered
			setOtp((prevOtp) => {
				const updatedOtp = [...prevOtp];
				updatedOtp[index] = e.target.value;
				return updatedOtp;
			});
			if (e.target.value && inputsRef.current[index + 1]) {
				inputsRef.current[index + 1]?.focus();
			}
		}
	}

	function handleKeyDown(
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) {
		if (
			e.key === "Backspace" &&
			!e.currentTarget.value &&
			inputsRef.current[index - 1]
		) {
			inputsRef.current[index - 1]?.focus();
		}
	}

	function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
		e.preventDefault();
		const pastedData = e.clipboardData
			.getData("Text")
			.slice(0, 4)
			.replace(/\D/g, "");
		if (pastedData.length === 4) {
			setOtp(pastedData.split(""));
			inputsRef.current[3]?.focus(); // Focus on the last box
		}
	}

	const handleback = () => {
		router.back();
	};

	const handleResendCode = async (e: React.MouseEvent<HTMLButtonElement>) => {
		if (timeLeft > 0) return; // Prevent resending before the timer expires
		try {
			setTimeLeft(60);
			setIsVisible(true);
			const res: any = await resendVerificationPin({
				email: userEmail,
			}).unwrap();
			toast.success(res?.message);
		} catch (error: any) {
			toast.error(
				error?.data?.message || "An error occurred while resending the code."
			);
		}
	};

	async function handleVerifyEmail(e: React.FormEvent) {
		e.preventDefault();
		if (otp.some((digit) => digit === "")) {
			toast.error("Please fill in all OTP fields.");
			return;
		}
		try {
			const res: any = await verifyEmail({ pin: otp.join("") }).unwrap();
			toast.success(res?.message);
			router.push("/sign-up/generating-profile");
			sessionStorage.removeItem("userEmail");
		} catch (error: any) {
			toast.error(error?.data?.message || "Verification failed.");
		}
	}

	return (
		<main className="text-black min-h-screen- h-auto overflow-x-hidden">
			<div className="p-0 m-0 h-full flex flex-col sm:flex-row py-3 sm:justify-center overflow-x-hidden">
				<div className="w-full md:w-[50%] h-auto bg-[#FEFEFE]  flex sm:justify-center relative flex-col items-center mx-auto border rounded shadow shadow-yellow-600 p-[1.5rem] md:pt-[3rem]">
					<div
						className="w-full flex pl-4 items-center py-4 flex-row sm:absolute sm:top-2 sm:left-2"
						onClick={handleback}
					>
						<Image src={arrowback} alt="arrowback" />
					</div>
					<h2 className="font-bold text-2xl sm:text-3xl text-black-100 text-center mt-1 w-full px-4">
						Confirm Email
					</h2>
					<p className="montserrat font-semibold text-sm text-black-100 text-center px-4">
						Please enter the verification pin sent to{" "}
						<strong>{userEmail}</strong> to confirm your email .
					</p>
					<main className="relative min-w-[95%] sm:min-w-[70%] mt-7 sm:mt-4 pb-6 flex items-center flex-col">
						<form className="w-full mt-4 mx-2" onSubmit={handleVerifyEmail}>
							<div className="otp-area font-semibold text-2xl">
								{otp.map((data, i) => (
									<input
										type="text"
										key={i}
										ref={(el) => {
											inputsRef.current[i] = el;
										}}
										value={data}
										maxLength={1}
										onChange={(e) => handleChange(e, i)}
										onKeyDown={(e) => handleKeyDown(e, i)}
										onPaste={(e) => handlePaste(e)}
									/>
								))}
							</div>
							<div className="mt-3">
								{isVisible ? (
									<div className="montserrat font-bold text-[1rem] text-[#021C5F] text-center">
										<span>Resend Code In</span>
										<Timer
											minute={1}
											secs={60}
											timeLeft={timeLeft}
											setTimeLeft={setTimeLeft}
											isVisible={isVisible}
											setIsVisible={setIsVisible}
										/>
									</div>
								) : (
									<div className="mt-6 w-full text-center">
										<p className="text-black-100 text-xs sora">
											Didn&#39;t get the code ?
										</p>
										<button
											onClick={handleResendCode}
											className="border-none text-sm  tracking-wider sora font-semibold text-stone-700"
										>
											Resend New Code
										</button>
									</div>
								)}
							</div>
							<Button type="login" disabled={isVerifying}>
								Verify <span>{isVerifying && <Spinner />}</span>
							</Button>
						</form>
					</main>
				</div>
			</div>
		</main>
	);
}

export default Page;
