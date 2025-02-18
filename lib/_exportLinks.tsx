import SlideImage1 from "@/public/image/scott-graham-OQMZwNd3ThU-unsplash.jpg";
import SlideImage2 from "@/public/image/scott-graham-5fNmWej4tAA-unsplash.jpg";
import SlideImage3 from "@/public/image/Pexels Photo by Christina Morillo.svg";
import Esgo from "@/public/image/founder,esgo.jpeg";
import Flolog from "@/public/image/flogog.jpeg";
import Marketer from "@/public/image/marketer.jpeg";
import AA from "@/public/image/Image2.jpeg";
import Benjamin from "@/public/image/video Editor.jpeg";
import KobieBrave from "@/public/image/kobi brave.jpeg";
import CEO from "@/public/image/ceo.jpeg";
import COO from "@/public/image/COO1.png";
import bb from "@/public/image/course image.png";
import tired from "@/public/image/tiredicon.png";
import courseplaceholder from "@/public/image/courseplaceholder.png";

import CoFounder from "@/public/image/coFounder.jpeg";
import CustomerExperienceDesigner from "@/public/image/Omaduvie.jpg";
import CTO from "@/public/image/CTO.jpg";
import BrandDesigner from "@/public/image/graphicsdesigner.jpeg";
import TalentSync from "@/public/image/logo4.png";
import ImpressionHub from "@/public/image/logo3.jpeg";
import IncRemote from "@/public/image/LUSH.png";
import Raiz from "@/public/image/logo5.jpeg";
import Vent from "@/public/image/Photo from Omole.jpg";
import WhyUsImg1 from "@/public/image/why-us6.jpg";
import WhyUsImg2 from "@/public/image/why-us4.jpg";
import WhyUsImg3 from "@/public/image/why-us5.jpg";

export const teamMembers = [
	{
		name: "Omole Usuangbon",
		role: "FOUNDER & CEO",
		src: CEO,
	},
	{
		name: "Sunday Gbenga A.",
		role: "Chief Operating Officer",
		src: COO,
	},
	{
		name: "Izuchukwu Samson",
		role: "Chief Technical Officer",
		src: CTO,
	},
	{
		name: "Tejiri Omaduvie",
		role: "Customer Experience Designer",
		src: CustomerExperienceDesigner,
	},

	{
		name: "Princess Ikoko",
		role: "Brand/Graphic Designer",
		src: BrandDesigner,
	},
];
export const testimonials = [
	{
		IMG: Esgo,
		name: "Sarah Epia",
		role: " Founder Esogo",
		review:
			"I have worked with several recruitment companies in the past, but JobMingle stands out from the rest. Their team is professional, responsive, and truly cares about finding the right fit for our business. I highly recommend them for any recruitment needs.",
	},
	{
		IMG: Benjamin,
		name: "Benjamin Jerry",
		role: "Video Editor",
		review:
			" One of the best decisions I have made so far online is taking JobMingle's video editing mastery course. I learned many new things I didn't know before. And the support from the course creator has been massive. I wish I had started learning video editing with their course.",
	},
	{
		IMG: KobieBrave,
		name: "Kobie Brave",
		role: "Video Editor",
		review:
			"I'm so glad I joined the JobMingle community when I saw their invite link in a WhatsApp group I belonged to. If I hadn't, I wouldn't have landed my remote job as a video editor for an amazing company. Thank you, JobMingle",
	},

	{
		IMG: Flolog,
		name: "Dr. Andrew Akhabue",
		role: " Co-founder, Flolog",

		review:
			"JobMingle is more than a job platform. The seamlessness, supportive team, and quality of talents we got from the platform is simply top notch. I'd recommend it for its dependability. ",
	},

	{
		IMG: AA,
		name: "Oluwatobiloba A. A",
		role: "Developer",
		review:
			"I had been searching for a hybrid or remote job for months with nothing to show for it. But everything changed when I joined JobMingle. I was able to land a junior customer care role thanks to them. Right now, I look forward to upskilling on their platform for bigger opportunities..",
	},
	{
		// I

		IMG: Marketer,
		name: "Ajayi Temitayo",
		role: "Marketing manager",
		review:
			"All thanks to JobMingle was able to land a marketing manager position in a reputable company. I'm so happy about this because of the number of rejections I had before getting this job. Thank you so much JobMingle.",
	},
];

type FAQItemType = {
	question: string;
	answer: string;
};
export const faqItems: FAQItemType[] = [
	{
		question: "What is JobMingle?",
		answer:
			"JobMingle is an innovative ed-tech platform and remote job recruitment website. We empower individuals seeking to transition to a new career by equipping them with the right skills and providing access to numerous remote job opportunities across the country. We assist employers in finding the remote talent they desire to grow their company and connect job seekers to the jobs they need to succeed.",
	},
	{
		question: "Do I need a laptop before I can visit Jobmingle.co?",
		answer:
			"No! You can access Jobmingle.co on all smart devices. As long as your phone can browse, you are good to go.",
	},
	{
		question: "Is there a mobile app available for JobMingle?",
		answer:
			"No. But we are currently working on it. We will notify you when it is available for download on the Play Store and Apple Store.",
	},
	{
		question: "What kind of courses are available on JobMingle?",
		answer:
			"We offer a wide range of courses across multiple industries. Which means we are not specific to a particular industry.",
	},
	{
		question: "Is it only remote jobs that are listed on JobMingle?",
		answer:
			"Yes. However, we also list hybrid jobs that require you to go to work a few times a week.",
	},
	{
		question: "Can I advertise with JobMingle?",
		answer:
			"Yes, you can. To advertise your brand, please send an email to contact@jobmingle.co to learn more about our advertising rates.",
	},
];
export const courses = [
	{
		image: bb,
		title: "UI/UX Design Crash Course",
		instructor: "Kelvin User",
		price: "$20",
	},
	{
		image: bb,
		title: "Email Marketing",
		instructor: "Meck Zin",
		price: "$120",
	},
	// Add more course objects (total of 8)
	{
		image: bb,
		title: "JavaScript Basics",
		instructor: "Alex Doe",
		price: "$30",
	},
	{
		image: bb,
		title: "React for Beginners",
		instructor: "Jane Smith",
		price: "$45",
	},
	{
		image: bb,
		title: "Python Programming",
		instructor: "Sam Wilson",
		price: "$50",
	},
	{
		image: bb,
		title: "Data Analysis with Python",
		instructor: "Emily Davis",
		price: "$60",
	},
	{
		image: bb,
		title: "Machine Learning 101",
		instructor: "Michael Brown",
		price: "$70",
	},
	{
		image: bb,
		title: "Web Development Bootcamp",
		instructor: "Sarah Johnson",
		price: "$80",
	},
];
export const faqItemss: FAQItemType[] = [
	{
		question: "How will my documents get to me?",
		answer:
			"Your documents will be sent in PDF format to the email you'll provide us with",
	},
	{
		question: "How long will it take for my CV & cover letter to be ready?",
		answer: "2-4 days.",
	},
	{
		question: "How long will it take for my portfolio to be ready?",
		answer: "7-10 days.",
	},
	{
		question: " What if I'm not satisfied with the quality of your work?",
		answer:
			"While this is rare, with JobMingle, you receive unlimited revisions till you are satisfied.",
	},
	{
		question: " How can I make payment for your services?",
		answer:
			"For the meantime, you can pay to our account details below and send proof of payment to our WhatsApp line below. Account details:2044112176 JobMingle Nigeria Firstbank ,WhatsApp line: 07077308481",
	},
];

export const faqJob: FAQItemType[] = [
	{
		question: "What happens when I apply for jobs posted on JobMingle?",
		answer:
			"You just have to wait for the employer to go through your application. Most times, employers go through over 100 applications, so it is only normal to experience some delays before getting feedback from them.",
	},
	{
		question: " Is it only remote jobs that are listed on JobMingle?",
		answer:
			"Yes. However, we also list hybrid jobs that require you to go to work a few times a week.",
	},
	{
		question: "Must I take a course on JobMingle before applying for any job? ",
		answer:
			"No. As long as you have the required skills for a particular remote job, please go ahead and apply for it.",
	},
	{
		question: " Are foreign jobs allowed on JobMingle?",
		answer:
			"Yes. Even though JobMingle focuses on remote jobs available in Nigeria, openings outside Nigeria are welcomed as well. In fact, most of the courses will also teach you how to earn in dollars working with foreign clients. Which means you don't have to rely on JobMingle alone to get jobs.",
	},
	{
		question: "Do I need a laptop to become a freelancer?",
		answer:
			"No. Most freelancers in Nigeria never started with a laptop. If you are in the writing niche, you don't need a laptop before you start applying for jobs. However, you may need a laptop if you are in the tech space.",
	},
];

export const faqCourses: FAQItemType[] = [
	{
		question: " Are the courses on JobMingle free?",
		answer:
			"No. They are not free but the prices are very affordable. We know that price is a big factor when it comes to investing in digital courses online",
	},
	{
		question:
			" Are there any free trials available before purchasing a course?",
		answer:
			"No. There are no free trials available. There are no subscription or part payment options as well. You can only access a course after paying the required amount in full.",
	},
	{
		question: "How do I access the course after purchasing?",
		answer:
			"You can always access the course on your JobMingle account using any device. All you need is your login details. That's all.",
	},
	{
		question:
			" If I purchase a course today, how long will it take me to finish it before I start applying for remote jobs on JobMingle?",
		answer:
			"Well, the answer to this question is totally dependent on you. Every course on JobMingle is unique. They all have different time durations, but most of them take just a few weeks to finish if you are a fast learner.",
	},
	{
		question:
			" Do the courses on JobMingle also teach how to earn in foreign currencies like dollars?",
		answer:
			"Yes, most of the courses on JobMingle also teach you how to earn in dollars working with foreign clients. Which means you don't have to rely on JobMingle alone when you start applying for jobs.",
	},
	{
		question:
			"  Can I interact with the course creator anytime I have a question?",
		answer:
			"Yes, you can. Taking a course on JobMingle connects you to a supportive community led by the creator, answering your questions and motivating your success.",
	},
	{
		question: " Are certificates provided for courses on JobMingle?",
		answer: "Yes. After the completion of your course.",
	},
];

//Slides
export const slides = [
	{
		imagesone: SlideImage1,
		headerText: "The Journey To Your New Career Begins Now!",
	},
	{
		imagesone: SlideImage2,
		headerText: "Your Dream Remote Job Awaits ",
	},
	{
		imagesone: SlideImage3,
		headerText: "Let Us Skill You Up And Guide You There ",
	},
];

//Why Choose Us Section data | Home Page
export const whyChooseUsData = [
	{
		img: WhyUsImg1,
		title: "Learn From Experts",
		description:
			"We offer the finest digital courses, taught by industry experts, and provide access to numerous remote job opportunities across the country.",
	},
	{
		img: WhyUsImg2,
		title: "Grow With Community",
		description:
			"Taking a course connects you to a supportive community led by the creator, answering your questions and motivating your success.",
	},
	{
		img: WhyUsImg3,
		title: "You Come First!",
		description:
			"At JobMingle, we prioritize you in every decision we make, ensuring that you receive the best possible experience when using our platform",
	},
];

// Job Tags
export const jobTags: string[] = [
	"Sales",
	"Fulltime",
	"Remote",
	"Product Designer",
	"Software Engineer",
	"DevOPs",
	"Illustrator",
	"Development",
	"UI/UX",
	"Virtual Assistant",
	"Marketing",
	"Cyber Security",
	"Moderator",
	"Researcher",
	"Project Manager",
	"Designer",
	"Graphic Designer",
];
// Courses Tags
export const courseTags: string[] = [
	"Sales",
	"Product Designer",
	"Illustrator",
	"Video Editing",
	"Development",
	"UI/UX",
	"Marketing",
	"Designs",
	"Software Development",
	"Data Science / Analytics",
	"Writing",
	"Human Resources",
	"IT Support",
	"Web Development",
	"Moderator",
	"Seo (Search Engine Optimization)",
	"Digital Marketing",
	"Researcher",
	"Project Manager",
	"Cyber Security",
	"Email Marketing",
	"Graphic Designer",
	"Virtual Assistant",
	"Management",
	"Customer Service",
];

// Partners Logo
export const partnersLogos = [
	{ img: TalentSync },
	{ img: ImpressionHub },
	{ img: IncRemote },
	{ img: Raiz },
	{ img: Vent },
	{ img: TalentSync },
	{ img: ImpressionHub },
	{ img: IncRemote },
	{ img: Raiz },
	{ img: Vent },
];

export const userPreferences = {
	usage: ["Apply for a job / Take a course", "Post a job", "List a course"],
	// usage: ["Student", "Employer", "Vendor"],
	interests: [
		"IT support",
		"Marketing",
		"designs",
		"Development",
		"data science",
		"writing",
		"video editing",
		"others",
	],
	image: [],
};

export const Jobs = [
	{
		id: 1,
		icon: tired,
		platform: "Upwork",
		jobTitle: "Virtual Assistant",
		location: "Remote",
		pricerange: "$15-$25",
		stat: "Applied",
		website: "www.google.com",
	},
	{
		id: 2,
		icon: tired,
		platform: "figma",
		jobTitle: "Virtual Assitance",
		location: "Remote",
		pricerange: "$40-$85",
		stat: "Available",
		website: "www.google.com",
	},
	{
		id: 3,
		icon: tired,
		platform: "Discord",
		jobTitle: "moderator",
		location: "Uyo Nigeria",
		pricerange: "$15-$25",
		stat: "Applied",
		website: "www.google.com",
	},
	{
		id: 4,
		icon: tired,
		platform: "Upwork",
		jobTitle: "Virtual Assitance",
		location: "Remote",
		pricerange: "$15-$25",
		stat: "Applied",
		website: "www.google.com",
	},
	{
		id: 5,
		icon: tired,
		platform: "Upwork",
		jobTitle: "Virtual Assitance",
		location: "Remote",
		pricerange: "$15-$25",
		stat: "Available",
		website: "www.google.com",
	},
	{
		id: 6,
		icon: tired,
		platform: "figma",
		jobTitle: "Virtual Assitance",
		location: "Remote",
		pricerange: "$40-$85",
		stat: "Available",
		website: "www.google.com",
	},
	{
		id: 7,
		icon: tired,
		platform: "Discord",
		jobTitle: "moderator",
		location: "Rivers state",
		pricerange: "$15-$25",
		stat: "Applied",
		website: "www.google.com",
	},
	{
		id: 8,
		icon: tired,
		platform: "Upwork",
		jobTitle: "Virtual Assitance",
		location: "Lagos Nigeria",
		pricerange: "$15-$25",
		stat: "Available",
		website: "www.google.com",
	},
	{
		id: 9,
		icon: tired,
		platform: "Upwork",
		jobTitle: "Virtual Assitance",
		location: "Remote",
		pricerange: "$15-$25",
		stat: "Applied",
		website: "www.google.com",
	},
	{
		id: 10,
		icon: tired,
		platform: "figma",
		jobTitle: "Virtual Assitance",
		location: "Remote",
		pricerange: "$40-$85",
		stat: "Applied",
		website: "www.google.com",
	},
	{
		id: 11,
		icon: tired,
		platform: "Discord",
		jobTitle: "moderator",
		location: "Rivers state",
		pricerange: "$15-$25",
		stat: "Available",
		website: "www.google.com",
	},
	{
		id: 12,
		icon: tired,
		platform: "Upwork",
		jobTitle: "Virtual Assitance",
		location: "Lagos Nigeria",
		pricerange: "$15-$25",
		stat: "Available",
		website: "www.google.com",
	},
	{
		id: 13,
		icon: tired,
		platform: "Discord",
		jobTitle: "moderator",
		location: "Rivers state",
		pricerange: "$15-$25",
		stat: "Applied",
		website: "www.google.com",
	},
	{
		id: 14,
		icon: tired,
		platform: "Upwork",
		jobTitle: "Virtual Assitance",
		location: "Lagos Nigeria",
		pricerange: "$15-$25",
		stat: "Available",
		website: "www.google.com",
	},
	{
		id: 15,
		icon: tired,
		platform: "Upwork",
		jobTitle: "Virtual Assitance",
		location: "Remote",
		pricerange: "$15-$25",
		stat: "Applied",
		website: "www.google.com",
	},
	{
		id: 16,
		icon: tired,
		platform: "figma",
		jobTitle: "Virtual Assitance",
		location: "Remote",
		pricerange: "$40-$85",
		stat: "Applied",
		website: "www.google.com",
	},
	{
		id: 17,
		icon: tired,
		platform: "Discord",
		jobTitle: "moderator",
		location: "Rivers state",
		pricerange: "$15-$25",
		stat: "Available",
		website: "www.google.com",
	},
	{
		id: 18,
		icon: tired,
		platform: "Upwork",
		jobTitle: "Virtual Assitance",
		location: "Lagos Nigeria",
		pricerange: "$15-$25",
		stat: "Available",
		website: "www.google.com",
	},
];

export const CoursesList = [
	{
		id: 1,
		icon: courseplaceholder,
		des: "course description in few words course description in few words",
		coursetitle: "Design Principles",
		category: "Design",
		pricerange: "$15-$25",
		stat: "Enrolled",
	},
	{
		id: 2,
		icon: courseplaceholder,
		des: "course description in few words course description in few words",
		coursetitle: "Email Marketing Basics",
		category: "Digital Marketing",
		pricerange: "$40-$85",
		stat: "Open",
	},
	{
		id: 3,
		icon: courseplaceholder,
		des: "course description in few words course description in few words",
		coursetitle: "Introduction to SEO",
		category: "Marketing",
		pricerange: "$15-$25",
		stat: "Enrolled",
	},
	{
		id: 4,
		icon: courseplaceholder,
		des: "course description in few words course description in few words",
		coursetitle: "Introduction to backend Dev.",
		category: "Development",
		pricerange: "$15-$25",
		stat: "Open",
	},
	{
		id: 5,
		icon: courseplaceholder,
		des: "course description in few words course description in few words",
		coursetitle: "Virtual Assitance course",
		category: "Management",
		pricerange: "$15-$25",
		stat: "Open",
	},
	{
		id: 6,
		icon: courseplaceholder,
		des: "course description in few words course description in few words",
		coursetitle: "Project Management Fundamentals",
		category: "Management",
		pricerange: "$40-$85",
		stat: "Open",
	},
	{
		id: 7,
		icon: courseplaceholder,
		des: "course description in few words course description in few words",
		coursetitle: "UI/UX for beginers",
		category: "Design",
		pricerange: "$15-$25",
		stat: "Enrolled",
	},
	{
		id: 8,
		icon: courseplaceholder,
		des: "course description in few words course description in few words",
		coursetitle: "introduction to Web. Dev.",
		category: "Development",
		pricerange: "$15-$25",
		stat: "Open",
	},
	{
		id: 9,
		icon: courseplaceholder,
		des: "course description in few words course description in few words",
		coursetitle: "Virtual Assitance crash course",
		category: "Marketing",
		pricerange: "$15-$25",
		stat: "Open",
	},
	{
		id: 10,
		icon: courseplaceholder,
		des: "course description in few words course description in few words",
		coursetitle: "Email Marketing",
		category: "Sales",
		pricerange: "$40-$85",
		stat: "Open",
	},
	{
		id: 11,
		icon: courseplaceholder,
		des: "course description in few words course description in few words",
		coursetitle: "UI/UX Design crash course",
		category: "development",
		pricerange: "$15-$25",
		stat: "Open",
	},
	{
		id: 12,
		icon: courseplaceholder,
		des: "course description in few words course description in few words",
		coursetitle: "Email Marketing",
		category: "Marketing",
		pricerange: "$15-$25",
		stat: "Open",
	},
];
