const Header = () => {
	return (
		<div className="Header">
			<h1 className="Title">Meteorite Map</h1>
			<div className="instructions">
				<p>This app was built using the following libraries / resources:</p>
				<li>React JavaScript Library </li>
				<li>React Leaflet JavaScript Library </li>
				<li>MUI React Component Library </li>
				<li>
					NASA's Open Data Portal -{" "}
					<a href="https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh">
						Meteorite Landings API
					</a>
				</li>
			</div>
		</div>
	);
};

export default Header;
