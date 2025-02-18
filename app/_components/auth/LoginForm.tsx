"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../ui/Button";
import Error from "../ui/Error";
import Cookies from "js-cookie";

import Spinner from "@/app/_components/ui/Spinner";
import ViewPassword from "../ui/VIewPassword";
import {useGetAuthUserQuery, useObtainTokenMutation} from "@/app/_features/appSlices/apiSlice";
import {useAppDispatch} from "@/app/_hooks/hooks";
import {setUser} from "@/app/_features/appSlices/userSlice";

interface FormData {
   email: string;
   password: string;
}

export default function LoginForm() {
   const {register, handleSubmit, formState} = useForm<FormData>({
      defaultValues: {
         email: "",
         password: "",
      },
   });
   const [Open, setOpen] = useState(false);
   const router = useRouter();

   const {errors} = formState;

   const [obtainToken, {isLoading, error}] = useObtainTokenMutation();

   const dispatch = useAppDispatch();

   function onError(errors: any) {
      console.error(errors);
   }

   // const { refetch } = useGetAuthUserQuery(undefined, { skip: true });
   // const [getAuthUser, { isLoading }] = useGetAuthUserQuery(undefined, {
   // 	skip: true,
   // });

   const handleObtainToken = async (data: any) => {
      try {
         const res: any = await obtainToken(data).unwrap();
         dispatch(setUser({user: res?.data, token: res?.token}));
         if (res?.token) {
            localStorage.setItem("access_token", res?.token);
            Cookies.set("access_token", res?.token, {
               path: "/",
               expires: 24 * 60 * 60,
               secure: process.env.NODE_ENV === "production",
               sameSite: "Strict",
            });

            if (res?.data?.goals === "List a course") {
               router.push("/vendor-dashboard");
            }

            if (res?.data?.goals === "Post a job") {
               router.push("/employer-dashboard");
            }

            if (res?.data?.goals === "Apply for a job / Take a course") {
               router.push("/dashboard");
            }

            if (res?.data?.role === "admin") {
               router.push("/admin-dashboard");
            }

            toast.success(res?.message);
         }
      } catch (error: any) {
         toast.error(error?.data?.message || "An error occured while performing request!");
         console.error(error);
      }
   };

   return (
      <div>
         <form className=" w-full mt-4" onSubmit={handleSubmit(handleObtainToken, onError)}>
            <div>
               <label className="text-sm montserrat py-1 tracking-wider font-medium">Email</label>
               <input
                  type="text"
                  id="email"
                  className="input"
                  // defaultValue={"creator.prjt@gmail.com"}
                  placeholder="Enter Your Email Here"
                  {...register("email", {
                     required: "This field is required!",
                  })}
               />
               {errors?.email?.message && <Error>{errors.email.message}</Error>}
            </div>

            <div className="relative">
               <label className="text-sm py-1 montserrat tracking-wider font-medium ">Password</label>
               <input
                  type={Open ? "text" : "password"}
                  id="password"
                  className="input"
                  // defaultValue={"Pa$$w0rd!"}
                  placeholder="Your Password"
                  {...register("password", {
                     required: "This field is required!",
                     minLength: {
                        value: 6,
                        message: "Password should be a minimum of six characters",
                     },
                  })}
               />
               <ViewPassword Open={Open} setOpen={setOpen} styles={"right-2 top-6"} />
               {errors?.email?.message && <Error>{errors.email.message}</Error>}
            </div>
            <div className=" mt-4 flex flex-row justify-between">
               <div className="flex flex-row gap-1">
                  <input type="checkbox" id="" />
                  <p className=" montserrat text-xs font-medium">Remember me</p>
               </div>
               <Link href={"/sign-in/forgot-password"} className="text-xs text-[#F6CC16] montserrat font-medium">
                  Forgot Password?
               </Link>
            </div>

            <Button
               type="login"
               disabled={isLoading}
               // onClick={(e) => handleSubmit(e)}
            >
               <span>{isLoading ? <Spinner /> : "Login"} </span>
            </Button>
         </form>
         <p className="text-sm montserrat  font-medium float-right mt-5 mb-3 text-black-100/80 ">
            Don&#39;t have an Account?{" "}
            <Link href="/sign-up" className="text-yellow-400 border rounded border-yellow-500 p-[3px]">
               Sign Up
            </Link>
         </p>
      </div>
   );
}
