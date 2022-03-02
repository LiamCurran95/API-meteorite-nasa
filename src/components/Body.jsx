import Sliders from "./Sliders";
import Map from "./Map.jsx";
import DataTable from "./DataTable.jsx";
import { useEffect, useState } from "react";
import fetchMeteors from "../utils/api.js";

export default function Body() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchMeteors().then((fetchedData) => {
			console.log(fetchedData);
			fetchedData = fetchedData.filter((meteor) => meteor.year);
			setData(
				fetchedData.map((meteor) => {
					meteor.year = meteor.year.slice(0, 4);
					return meteor;
				})
			);
		});
	}, []);

	return (
		<>
			{/* <Sliders /> <br></br> */}
			<DataTable data={data} />
			<br></br>
			<Map data={data} />
		</>
	);
}
