"use client";

import React from "react";

const RefreshButton = () => {
	const handleRefresh = () => {
		window.location.reload(); // Reloads the browser
	};

	return (
		<div className="flex justify-center ">
			<button
				onClick={handleRefresh}
				className="border rounded text-yellow-500 hover:text-white hover:bg-black transition-all duration-700 border-yellow-500 hover:border-white p-3 "
			>
				Refresh Page
			</button>
		</div>
	);
};

export default RefreshButton;
