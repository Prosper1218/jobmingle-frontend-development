"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Button from "../ui/Button";
import Error from "../ui/Error";

import Spinner from "@/app/_components/ui/Spinner";
import ViewPassword from "../ui/VIewPassword";
import { useCreateUserMutation } from "@/app/_features/appSlices/apiSlice";

interface FormData {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	password: string;
	password_confirmation: string;
}

export default function SignUpForm() {
	const router = useRouter();
	const [agreedToTerms, setAgreedToTerms] = useState(null);
	const [Open, setOpen] = useState(false);
	const [Open2, setOpen2] = useState(false);
	const agree = true;

	const { register, handleSubmit, watch, formState } = useForm<FormData>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			password: "",
			password_confirmation: "",
		},
	});
	const { errors } = formState;

	const [createUser, { isLoading: isCreatingUser, error }] =
		useCreateUserMutation();

	const password = watch("password", "");
	const password2 = watch("password_confirmation", "");

	function onError(errors: any) {
		console.error(errors);
	}

	function handdleAgreement(e: any) {
		setAgreedToTerms(e.target.checked);
	}

	async function handleCreateUser(data: FormData) {
		try {
			const res: any = await createUser(data).unwrap();
			toast.success(res?.message);
			sessionStorage.setItem("userId", res?.data?.user_id);
			sessionStorage.setItem("userEmail", data.email);
			router.push("/sign-up/confirm-email");
		} catch (error: any) {
			toast.error(
				error?.data?.message || "An error occured while performing request!"
			);
			console.error(error);
		}
	}
	return (
		<div>
			<form
				className=" w-full mt-4"
				onSubmit={handleSubmit(handleCreateUser, onError)}
			>
				<div>
					<label className="text-sm montserrat py-1 tracking-wider font-medium">
						First Name
					</label>
					<input
						type="text"
						id="firstName"
						className="input"
						placeholder="Enter your first name"
						{...register("firstName", {
							required: "This field is required!",
						})}
					/>
					{errors?.firstName?.message && (
						<Error>{errors.firstName.message}</Error>
					)}
				</div>
				<div>
					<label className="text-sm montserrat py-1 tracking-wider font-medium">
						Last Name
					</label>
					<input
						type="text"
						id="lastName"
						className="input"
						placeholder="Enter your last name"
						{...register("lastName", {
							required: "This field is required!",
						})}
					/>
					{errors?.lastName?.message && (
						<Error>{errors.lastName.message}</Error>
					)}
				</div>

				<div>
					<label className="text-sm montserrat py-1 tracking-wider font-medium">
						Email
					</label>
					<input
						type="text"
						id="email"
						className="input"
						placeholder="Enter your email"
						{...register("email", {
							required: "This field is required!",
						})}
					/>
					{errors?.email?.message && <Error>{errors.email.message}</Error>}
				</div>

				<div>
					<label className="text-sm montserrat py-1 tracking-wider font-medium">
						Phone Number
					</label>
					<input
						type="text"
						id="phoneNumber"
						className="input"
						placeholder="Enter your phone number"
						{...register("phoneNumber", {
							required: "This field is required!",
						})}
					/>
					{errors?.phoneNumber?.message && (
						<Error>{errors.phoneNumber.message}</Error>
					)}
				</div>

				<div className="relative">
					<label className="text-sm py-1 montserrat tracking-wider font-medium ">
						Password
					</label>
					<input
						type={Open ? "text" : "password"}
						id="password"
						className="input"
						placeholder="Your password"
						{...register("password", {
							required: "This field is required!",

							pattern: {
								value: /^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
								message:
									"Password must be at least 8 characters long and contain at least one number",
							},
						})}
					/>
					<ViewPassword
						Open={Open}
						setOpen={setOpen}
						styles={"right-2 top-6"}
					/>
					{errors?.password?.message && (
						<Error>{errors.password.message}</Error>
					)}
				</div>

				<div className="relative">
					<label className="text-sm py-1 montserrat tracking-wider font-medium ">
						Confirm Password
					</label>
					<input
						type={Open2 ? "text" : "password"}
						id="password_confirmation"
						className="input"
						placeholder="Confirm password"
						{...register("password_confirmation", {
							required: "This field is required!",
							validate: (value) =>
								value === password || "Password do not match!",
							minLength: {
								value: 8,
								message: "Password should be a minimum of eight characters",
							},
						})}
					/>

					<ViewPassword
						Open={Open2}
						setOpen={setOpen2}
						styles={"right-2 top-6"}
					/>

					{errors?.password_confirmation?.message && (
						<Error>{errors.password_confirmation.message}</Error>
					)}
				</div>

				<div className=" mt-1 flex flex-row justify-between">
					<div className="flex flex-row gap-1">
						<input
							type="checkbox"
							name="agreement"
							id=""
							onChange={handdleAgreement}
						/>
						<label className=" montserrat text-xs font-medium">
							i have read and agreed to the{" "}
							<Link className="text-yellow-500" target="_blank" href="/terms">
								Terms and Conditions{" "}
							</Link>{" "}
							of Jobmingle.
						</label>
					</div>
				</div>

				<Button
					type="login"
					disabled={!agreedToTerms || isCreatingUser}
					// onClick={(e) => handleSubmit(e)}
				>
					<span>{isCreatingUser ? <Spinner /> : "Sign Up"}</span>
				</Button>
			</form>
			<button className="text-sm montserrat  font-medium float-right mt-4 text-black-100/80 ">
				Already have an Account?{" "}
				<Link
					href="/sign-in"
					className="text-yellow-400 border rounded border-yellow-500 p-[3px]"
				>
					Login
				</Link>
			</button>
		</div>
	);
}
