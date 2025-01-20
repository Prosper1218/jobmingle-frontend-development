import React from "react";

export default function Button({
	type = "danger",
	children,
	onClick,
	disabled,
	flexible,
}: {
	children?: React.ReactNode;
	type?: any;
	flexible?: boolean;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
	const styles: Record<string, string> = {
		login: `border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[3rem] pl-4 mt-[3.5rem] sm:mt-6 bg-[#F6CC16] text-center flex justify-center items-center ${
			disabled && "cursor-not-allowed"
		} `,
		regular: `border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[3rem] pl-4  bg-[#F6CC16] text-center flex justify-center items-center ${
			disabled && "cursor-not-allowed"
		} `,
		danger: `border-[1px] border-red-800 text-sm text-[#f61616] tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem]  sm:h-[3rem]  transition-colors duration-1000 ease-in-out  bg-stone-50 hover:text-white hover:bg-[#f61616] text-center  ${
			disabled && "cursor-not-allowed"
		} `,
		secondary: `border-[1px] border-stone-500 text-sm tracking-wider text-gray-600 font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[3rem] transition-colors duration-1000 ease-in-out bg-gray-50 hover:bg-gray-200 text-center  ${
			disabled && "cursor-not-allowed"
		} `,

		profile: `border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-[${
			flexible ? "100%" : "35%"
		}] rounded-[10px] h-[3rem] sm:h-[3rem] pl-4 mt-[3.5rem] sm:mt-6 bg-[#F6CC16]   `,
		logout:
			"border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-ful rounded-[10px] h-[3rem] sm:h-[3rem] px-4 mt-[3.5rem] sm:mt-6 bg-[#504e46] text-center",
	};

	// if (onClick)
	// 	return (
	// 		<button className={styles[type]} type="button" onClick={onClick}>
	// 			{children}
	// 		</button>
	// 	);
	// if (disabled)
	// 	return (
	// 		<button className={styles[type]} disabled={disabled}>
	// 			{children}
	// 		</button>
	// 	);

	return (
		<button className={styles[type]} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}
