import Map from "./Map.jsx";
import Table from "./Table.jsx";

import { useState } from "react";
export default function Body() {
  const [data, setData] = useState("");

  return fetchFromApi()
    .then((fetchedData) => {
      setData(fetchedData).then(() => {
        console.log(data);
      });
    })
    .then(() => {
      return (
        <>
          <Table data={data} />
        </>
      );
    });
}

function fetchFromApi() {
  return fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      return data;
    });
}
