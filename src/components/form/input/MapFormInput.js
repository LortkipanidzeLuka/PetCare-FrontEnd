import Leaflet from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import Text from '../../styled/text/Text';
import { TextType } from '../../styled/text/TextType';

const initCoordinates = [41.69207829061234, 44.82142925262452];

const MapFormInput = ({ heading, setValue, register, name, xl, lg, sm, xs, encrypt, decrypt, getValue }) => {
	const [position, setPosition] = useState(initCoordinates);

	Leaflet.Icon.Default.imagePath =
		'../node_modules/leaflet';
	delete Leaflet.Icon.Default.prototype._getIconUrl;
	Leaflet.Icon.Default.mergeOptions({
		iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
		iconUrl: require('leaflet/dist/images/marker-icon.png'),
		shadowUrl: require('leaflet/dist/images/marker-shadow.png')
	});
	const outerValue = getValue(name);

	useEffect(() => {
		if (decrypt && outerValue) {
			const { latitude, longitude } = decrypt(outerValue);
			setPosition([latitude, longitude]);
		} else if (!outerValue && decrypt) {
			setValue(name, encrypt({ latitude: initCoordinates[0], longitude: initCoordinates[1] }));
		}
	}, [outerValue, decrypt, setPosition, setValue, encrypt, name]);

	return (
		<Col xl={xl} lg={lg} sm={sm} xs={xs}>
			<Row className={'mrb-medium'}>
				<input
					className={'no-display'}
					{...register(name)}
					name={name}
					type={'text'}
					required={false}
				/>
				<Text text={heading} type={TextType.MEDIUM} classNames={['mrb-small']} />
				<MapContainer center={position} zoom={5} style={{ height: '300px' }} whenReady={(map) => {
					map.target.on('click', function(e) {
						const { lat, lng } = e.latlng;
						setPosition([lat, lng]);
						setValue(name, encrypt({ latitude: lat, longitude: lng }));
					});
				}}>
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker position={position}>
						<Popup>
							Location (lat: {position[0]}, log{position[1]})
						</Popup>
					</Marker>
				</MapContainer>
			</Row>
		</Col>
	);

};
export default MapFormInput;
