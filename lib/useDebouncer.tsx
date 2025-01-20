"use client";

import { useState, useEffect } from "react";
export const useDebouncer = (search: string, delayTimer: number) => {
	//create the state variable to hold the search
	const [debounceValue, setdebounceValue] = useState(search);
	//on typing run it when the tyoin stop at the exact time
	useEffect(() => {
		const handler = setTimeout(() => {
			setdebounceValue(search);
		}, delayTimer);

		return () => {
			clearTimeout(handler);
		};
	}, [search, delayTimer]);

	return debounceValue;
};
