import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
	return `${value}°C`;
}

const minDistance = 10;

export default function MinimumDistanceSlider() {
	const [value1, setValue1] = React.useState([0, 60000000]);

	const handleChange1 = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
		} else {
			setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
		}
	};

	const [value2, setValue2] = React.useState([861, 2021]);

	const handleChange2 = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (newValue[1] - newValue[0] < minDistance) {
			if (activeThumb === 0) {
				const clamped = Math.min(newValue[0], 100 - minDistance);
				setValue2([clamped, clamped + minDistance]);
			} else {
				const clamped = Math.max(newValue[1], minDistance);
				setValue2([clamped - minDistance, clamped]);
			}
		} else {
			setValue2(newValue);
		}
	};

	return (
		<Box sx={{ width: 300 }}>
			<Slider
				getAriaLabel={() => "Mass Filter"}
				value={value1}
				onChange={handleChange1}
				valueLabelDisplay="auto"
				getAriaValueText={valuetext}
				disableSwap
			/>
			<Slider
				getAriaLabel={() => "Year Filter"}
				value={value2}
				onChange={handleChange2}
				valueLabelDisplay="auto"
				getAriaValueText={valuetext}
				disableSwap
			/>
		</Box>
	);
}

const massMarks = [
	{
		value: 0,
		label: "0g",
	},
	{
		value: 15000000,
		label: "15000000g",
	},
	{
		value: 30000000,
		label: "30000000g",
	},
	{
		value: 60000000,
		label: "60000000g",
	},
];

const yearMarks = [
	{
		value: 800,
		label: "800",
	},
	{
		value: 1200,
		label: "1200",
	},
	{
		value: 1600,
		label: "1600",
	},
	{
		value: 2000,
		label: "2000",
	},
	{
		value: 2100,
		label: "2100",
	},
];
