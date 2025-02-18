export interface UserTypes {
	id: string;
	moodle_user_id: number;
	firstName: string;
	lastName: string;
	email: string;
	email_verified_at: string;
	phoneNumber: string;
	interests: string[];
	goals: string;
	image: string;
	role: string;
	created_at: string;
	updated_at: string;
}

export interface JobTypes {
	company_name: string;
	company_site: string;
	job_role: string;
	job_type: string;
	salary: number;
	id: number;
	job_description: string;
	job_responsibilities: string;
	job_email: string;
	job_link: string;
}

export const convertFileToBase64 = (
	file: File
): Promise<string | ArrayBuffer | null> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
};

export const TimestampToDateString = (timestamp: number): string => {
	const date = new Date(timestamp * 1000);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = String(date.getFullYear());
	return `${day}/${month}/${year}`;
};

// Function to convert timestamp to date string
export const TimestampToDateStrings = (timestamp: any) => {
	const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
	return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
};

export const formatUrl = (url: string) => {
	if (!url) return "#";

	let normalizedUrl = url.trim().toLowerCase();

	normalizedUrl = normalizedUrl.replace(/^https?:\/\//, "");

	// Prepend https://
	return `https://${normalizedUrl}`;
};
