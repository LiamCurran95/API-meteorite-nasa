import Map from "./Map.jsx";

import DataTable from "./DataTable.jsx";
import { useEffect, useState } from "react";
export default function Body() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchFromApi().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  return (
    <>
      <DataTable data={data} />
    </>
  );
}

function fetchFromApi() {
  return fetch("https://data.nasa.gov/resource/gh4g-9sfh.json").then((data) => {
    return data.json();
  });
}
