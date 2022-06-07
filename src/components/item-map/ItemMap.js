import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const ItemMap = ({ latitude, longitude, height }) => {
	return (
		<div className={'p-all-small'}>
			{latitude && longitude && <MapContainer center={[latitude, longitude]} zoom={10} style={{ height: height }}>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[latitude, longitude]}>
					<Popup>
						Location (lat: {latitude}, log{longitude})
					</Popup>
				</Marker>
			</MapContainer>}
		</div>
	);
};

export default ItemMap;
