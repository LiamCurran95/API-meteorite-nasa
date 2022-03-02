import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
	{ field: "name", headerName: "Name", width: 130 },
	{ field: "id", headerName: "Id", width: 130 },
	{ field: "recclass", headerName: "Class", width: 130 },
	{ field: "mass", headerName: "Mass(g)", width: 130 },
	{ field: "year", headerName: "Year", width: 130 },
	{ field: "reclat", headerName: "Latitude", width: 130 },
	{ field: "reclong", headerName: "Longitude", width: 130 },
];

export default function DataTable(props) {
	return (
		<div className="dataTable">
			<DataGrid
				rows={props.data}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
}
