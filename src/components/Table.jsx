import createTable from "../utils/createTable";

export default function Table(props) {
  console.log(props.data);
  return (
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>ID</td>
          <td>Recclas</td>
          <td>Mass</td>
          <td>Year</td>
          <td>Geolocation</td>
        </tr>
      </tbody>
      {createTable(props.data)}
    </table>
  );
}
