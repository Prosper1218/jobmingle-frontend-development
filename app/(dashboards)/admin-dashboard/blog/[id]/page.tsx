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
         <section className="sm:h-[406px] border grid grid-cols-1 md:grid-cols-2 justify-between">
            <div className="border">{Blog[params.id - 1].title}</div>
            <div>
               <Image src={cover} alt="cover" className="w-[507px] h-[326px]" />
            </div>
         </section>
      </div>
   );
};

export default page;
