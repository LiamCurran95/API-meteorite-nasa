import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";

export default function Map(props) {
	const meteors = props.data.filter((meteor) => meteor.reclat != undefined);

	return (
		<div id="map">
			<MapContainer center={[51.505, -0.09]} zoom={1}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{meteors.map((meteorite) => {
					return (
						<Marker
							key={meteorite.id}
							position={[+meteorite.reclat, +meteorite.reclong]}
						/>
					);
				})}
			</MapContainer>
		</div>
	);
}
