export default function fetchMeteors() {
  return fetch(
    "https://data.nasa.gov/api/id/gh4g-9sfh.json?$select=`name`,`id`,`nametype`,`recclass`,`mass`,`year`,`reclat`,`reclong`&$order=`:id`+ASC&$limit=400000&$offset=0"
  )
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

//original API https://data.nasa.gov/resource/gh4g-9sfh.json
