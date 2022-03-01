import Map from "./Map.jsx";
import DataTable from "./DataTable.jsx";
import { useEffect, useState } from "react";
import fetchMeteors from "../utils/api.js";
export default function Body() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchMeteors().then((fetchedData) => {
			setData(fetchedData);
		});
	}, []);

	return (
		<>
			<DataTable data={data} />
			<br></br>
			{/* <Map data={data} /> */}
		</>
	);
}
