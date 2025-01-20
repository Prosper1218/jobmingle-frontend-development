"use client";
import Button from "@/app/_components/atoms/Button";
import Image from "next/image";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {BsPlus} from "react-icons/bs";
import {FiEdit2} from "react-icons/fi";

interface FormData {
   title: string;
   content: string;
   cover: string;
}
const page = () => {
   const [imagePreview, setImagePreview] = useState<string | null>(null);

   const {
      register,
      handleSubmit,
      formState: {errors},
   } = useForm<FormData>({
      defaultValues: {
         title: "",
         content: "",
         cover: "",
      },
   });

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]; // Get the selected file
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setImagePreview(reader.result as string); // Set the image preview URL
         };
         reader.readAsDataURL(file); // Read the file as a data URL
      }
   };
   const handleAdd = () => {
      alert("hi");
   };
   const onError = () => {
      console.log("erro");
   };
   return (
      <div className="min-h-[110vh]">
         <form className=" w-full mt-4" onSubmit={handleSubmit(handleAdd, onError)}>
            {/* <div className="flex  md:flex-col items-center justify-center gap-5"> */}
            {/* Profile Picture Container */}
            <div className="relative w-full h-[25rem] border rounded-[10px] flex justify-center items-center">
               <div className="w-full h-full overflow-hidden border border-gray-300 rounded-[10px]">
                  {imagePreview ? (
                     <Image src={imagePreview} alt="Profile Picture" width={160} height={160} className=" h-full w-full rounded-[10px] object-cover" />
                  ) : (
                     <label
                        htmlFor="profile-picture-input"
                        className="absolute top-0 bottom-0 left-0 right-0 m-auto w-20 h-20 bg-yellow-600 rounded-full cursor-pointer items-center justify-center flex"
                     >
                        <BsPlus color="white" className=" h-10 w-10" />
                     </label>
                  )}
               </div>

               {/* Edit Icon */}

               <input id="profile-picture-input" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </div>
            {/* </div> */}
            <br />
            <div>
               <label className="text-sm montserrat py-1 tracking-wider font-medium">Title</label>
               <input type="text" id="title" className="input" placeholder="Title" />
            </div>
            <br />
            <div className="relative">
               <label className="text-sm py-1 montserrat tracking-wider font-medium ">Content</label>
               {/* <input id="content" className="input h-[40]" placeholder="content" /> */}
               <textarea
                  name="content"
                  id="content"
                  rows={10}
                  className=" w-full border-[1px] border-solid border-gray focus:outline-none outline-none rounded-[10px] sora px-4 pt-4 text-sm"
               ></textarea>
            </div>
            <br />
            <Button
               type="submit"
               // disabled={isLoading}
               // onClick={(e) => handleSubmit(e)}
            >
               {/* <span>{isLoading ? <Spinner /> : "Login"} </span> */}
               Add Blog
            </Button>
         </form>
      </div>
   );
};

export default page;
