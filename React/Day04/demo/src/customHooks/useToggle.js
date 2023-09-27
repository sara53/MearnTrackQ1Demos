import { useState } from "react";

export let useToggle = () => {
	let [show, setShow] = useState(false);

	let toggle = () => {
		setShow(!show);
	};
	return [show, toggle];
};
