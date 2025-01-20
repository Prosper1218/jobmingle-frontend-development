"use client";
import React, {useState} from "react";
import cover from "../../../../public/image/cover.png";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Link from "next/link";
//
//
const Blog = [
   {
      id: 1,
      coverphoto: "",
      title: "3 legitimate online jobs you can start today from home",
      story: "Jobs that allow you to work from home are the most delightful jobs.They give you more freedom and the opportunity to spend more time with your family, go on that vacation, pursue other goals or dreams you might have.",
      date: "15th jan. 2025",
      mins: 2,
   },

   {
      id: 2,
      coverphoto: "",
      title: "4 legitimate online jobs you can start today from home",
      story: "Jobs that allow you to work from home are the most delightful jobs.They give you more freedom and the opportunity to spend more time with your family, go on that vacation, pursue other goals or dreams you might have.",
      date: "15th jan. 2025",
      mins: 5,
   },
   {
      id: 3,
      coverphoto: "",
      title: "5 legitimate online jobs you can start today from home",
      story: "Jobs that allow you to work from home are the most delightful jobs.They give you more freedom and the opportunity to spend more time with your family, go on that vacation, pursue other goals or dreams you might have.",
      date: "15th jan. 2025",
      mins: 6,
   },
   {
      id: 4,
      coverphoto: "",
      title: "6 legitimate online jobs you can start today from home",
      story: "Jobs that allow you to work from home are the most delightful jobs.They give you more freedom and the opportunity to spend more time with your family, go on that vacation, pursue other goals or dreams you might have.",
      date: "15th jan. 2025",
      mins: 8,
   },
];
const Page = () => {
   const router = useRouter();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isModal2Open, setIsModal2Open] = useState(false);
   const [blog, setBlog] = useState({
      id: 4,
      coverphoto: "",
      title: "",
      story: "",
   });
   const handleEdit = (item: any) => {
      setIsModal2Open(true); // Open the modal
   };

   const handleCloseModal = () => {
      setIsModalOpen(false); // Close the modal
   };
   const handleDelete = () => {
      setIsModalOpen(true);
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setBlog({...blog, [e.target.name]: e.target.value});
   };
   const handleCloseModal2 = ({item}: any) => {
      setIsModal2Open(false); // Close the modal
      setBlog(item);
   };
   return (
      <div>
         <button
            className="flex justify-center items-center h-[3rem]  w-[140px]  py-3 px-6 rounded bg-[#FFBE0B] font-sans text-[#006] font-['DM font-medium leading-6"
            onClick={() => router.push("/admin-dashboard/blog/add")}
         >
            Add Post
         </button>
         <div className=" mt-4 min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Blog.map((item) => {
               return (
                  <main key={item.id} className=" min-h-[370px] border-[1px] border-[#D2CFCF] border-solid rounded-[15px] p-[10px]">
                     <Link href={`/admin-dashboard/blog/${item.id}`} key={item.id}>
                        <Image src={cover} alt="cover" />
                     </Link>
                     <div className=" flex flex-row gap-3 mt-2">
                        <button className="bg-green-600 py-1 px-3 text-sm sora rounded-[3px] text-white" onClick={() => handleEdit(item)}>
                           Edit
                        </button>
                        <button className="bg-red-600 py-1 px-3 text-sm sora rounded-[3px] text-white" onClick={() => handleDelete()}>
                           Delete
                        </button>
                        <button className="bg-[#FFBE0B] py-1 px-3 text-sm sora rounded-[3px] text-white">Publish</button>
                     </div>
                     <h2 className="text-[15px] text-[#080707] font-[600] montserrat mt-2">{item.title}</h2>bnv
                     <p className="text-[#545454] font-[400] text-[13px] montserrat">{item.story}</p>
                     <hr className="border mx-2 my-2 " />
                     <section className="flex justify-between items-center mb-2">
                        <div className="sora font-[400] text-[12px]">{item.date}</div>
                        <div className="sora font-[300] text-[12px]">{item.mins}mins read</div>
                     </section>
                  </main>
               );
            })}
         </div>
         {isModalOpen && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50" onClick={handleCloseModal}>
               <div className="bg-white z- p-6 rounded-md w-[30%] h-[20%] flex flex-col justify-between sora">
                  <h3>Are you sure you want to delete this blog post ??</h3>
                  <section className="flex flex-row gap-4">
                     <button className="px-4 text-white py-2 bg-red-600 rounded-[6px]">yes</button>
                     <button className="px-4 text-white py-2 bg-green-600 rounded-[6px]">No</button>
                  </section>
               </div>
            </div>
         )}

         {isModal2Open && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
               <div className="bg-white z- p-6 rounded-md w-[80%] h-[90%]">
                  <form className="space-y-4">
                     <div>
                        <label className="block font-bold">title:</label>
                        <input type="text" name="title" value={blog.title} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md" />
                     </div>
                     <div>
                        <label className="block font-bold">Content:</label>
                        <input type="text" name="content" value={blog.story} onChange={handleInputChange} className="w-full p-2 border border-gray-300 h-[32] rounded-md" />
                     </div>

                     <div className="flex justify-end gap-4">
                        <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCloseModal2}>
                           Cancel
                        </button>
                        <div className="flex justify-end">
                           <button type="button" className={`bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 `}>
                              Save Changes
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         )}
      </div>
   );
};

export default Page;
