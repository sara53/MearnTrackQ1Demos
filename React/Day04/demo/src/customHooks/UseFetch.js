import { useEffect, useState } from "react";

export const useFetch = (url) => {
	let [data, setData] = useState([]);
	let [isLoading, setIsLoading] = useState(false);
	let [errors, setErrors] = useState(null);

	useEffect(() => {
		let fetchData = async () => {
			setIsLoading(true);

			try {
				let response = await fetch(url);
				let data = await response.json();
				setData(data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setErrors("Error happens");
			}
		};

		fetchData();
	}, []);

	return [data, isLoading, errors];
};
