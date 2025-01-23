import {useRouter} from "next/router";
import React from "react";
import cover from "../../../../../public/image/cover.png";
import Image from "next/image";
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
const page = ({params}: any) => {
   return (
      <div>
         {/* <section className="sm:h-[406px] border grid grid-cols-1 md:grid-cols-2 justify-between items-end gap-8">
            <div className="border  max-w-[20rem] flex flex-col gap-1 ">
               <h2 className="montserrat font-[600] text-[21px]">{Blog[params.id - 1].title}</h2>
               <p className="text-[15px] sora">remote jobs</p>
               <p className="text-[15px] sora">{Blog[params.id - 1].date}</p>
            </div>
            <div>
               <Image src={cover} alt="cover" className="w-[507px] h-[326px]" />
            </div>
         </section> */}
         <div className="blog-details">
            <div id="home" className="  flex justify-center items-start md:mb-[5rem]  md:items-center  md-justify-center flex-col md:flex-row  ">
               {/* Right column */}
               <div className="w-full  md:hidden lg:hidden  h-full flex items-center justify-center my-10  ">
                  <Image
                     src={cover}
                     alt="Background"
                     width={500}
                     height={500}
                     data-aos="zoom-in"
                     style={{objectFit: "cover"}}
                     priority
                     // className="h-auto w-auto"
                     className=" max-md:w-[400px] max-md:h-[300px]"
                  />
               </div>
               {/* Left column */}
               <div className="relative   flex lg:items-start  flex-col h-full max-md:border-2 max-md:py-6 max-md:mb-6  md:px-2 ">
                  <div className="text-center lg:text-start lg:text-[44px]  font-[600]   w-full px-[5px] " data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                     {Blog[params.id - 1].title}
                  </div>

                  <div
                     className="flex justify-start flex-col max-md:mx-auto lg:justify-start   lg:items-start  my-6"
                     data-aos="zoom-in"
                     data-aos-duration="1200"
                     data-aos-delay="700"
                     id="animationbutton"
                  >
                     <p>remote jobs</p>
                     <p className="text-[24px]">{Blog[params.id - 1].date}</p>
                  </div>
               </div>

               {/* Right column */}
               <div className="w-full max-lg:hidden h-full flex items-center justify-center">
                  <Image
                     src={cover}
                     width={500}
                     height={500}
                     alt="Background"
                     data-aos="zoom-in"
                     style={{objectFit: "cover"}}
                     className=" max-md:w-[400px] max-md:h-[300px]"
                     priority
                  />
               </div>
               <div></div>
            </div>
            <div style={{padding: "20px", fontFamily: "Arial, sans-serif"}} className="sora ">
               <h1 style={{textAlign: "center", color: "#FFA500"}} className="montserrat text-2xl">
                  Introduction
               </h1>

               <section className="whitespace-pre break-words"> {Blog[params.id - 1].story}</section>
            </div>
            {/* <Image src={cover} alt="longpic" width={500} height={500} className="w-full mb-8" /> */}

            <div style={{marginTop: "30px", textAlign: "center"}} className="w-8/10">
               <textarea
                  placeholder="Drop Your Comment Here"
                  style={{
                     width: "80%",
                     height: "100px",
                     padding: "10px",
                     fontSize: "16px",
                     border: "1px solid #ccc",
                     borderRadius: "5px",
                     marginBottom: "10px",
                  }}
                  className="w-full"
               ></textarea>
               <br />
               <button
                  style={{
                     backgroundColor: "#FFD700",
                     border: "none",
                     color: "#fff",
                     padding: "10px 20px",
                     fontSize: "16px",
                     borderRadius: "5px",
                     cursor: "pointer",
                  }}
                  className="w-[8/10]"
               >
                  Submit Comment
               </button>
            </div>

            {/* <Comments/> */}
         </div>
      </div>
   );
};

export default page;
