import Map from "./Map.jsx";
import DataTable from "./DataTable.jsx";
import { useEffect, useState } from "react";
import fetchMeteors from "../utils/api.js";
export default function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMeteors().then((fetchedData) => {
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
      <DataTable data={data} />
      <br></br>
      <button>Filter Between Years:</button>
      <input type="text"></input>
      <Map data={data} />
    </>
  );
}
