export default function fetchFromApi() {
  return fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      return data;
    })
    .catch(console.log);
}
