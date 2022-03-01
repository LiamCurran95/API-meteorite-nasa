import Map from "./Map.jsx";
import DataTable from "./DataTable.jsx";
import { useEffect, useState } from "react";
import fetchMeteors from "../utils/api.js";
export default function Body() {
  const [tableData, setTableData] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  useEffect(() => {
    fetchMeteors().then((fetchedData) => {
      fetchedData = fetchedData.filter((meteor) => meteor.year);
      setTableData(
        fetchedData.map((meteor) => {
          meteor.year = meteor.year.slice(0, 4);
          return meteor;
        })
      );
    });
  }, []);
  function filterMapData() {
    const filteredTableData = tableData.filter((meteor) => {
      return +meteor.year <= +endDate && +meteor.year >= +startDate;
    });

    setMapData(filteredTableData);
  }

  return (
    <>
      <DataTable data={tableData} />
      <br></br>
      <button
        onClick={() => {
          filterMapData();
        }}
      >
        Filter Between Years:
      </button>
      <input
        value={startDate}
        type="text"
        onChange={(e) => {
          setStartDate(e.target.value);
        }}
      ></input>
      <span> and </span>
      <input
        value={endDate}
        type="text"
        onChange={(e) => {
          setEndDate(e.target.value);
        }}
      ></input>
      <Map data={mapData} />
    </>
  );
}
