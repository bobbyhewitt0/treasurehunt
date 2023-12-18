import { useEffect, useState, useRef, useContext } from 'react'
import mapboxgl from 'mapbox-gl';
import styled from 'styled-components'
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken ='pk.eyJ1IjoiYm9iYnloZXdpdHQiLCJhIjoiY2xoeXd1cTN0MTdzYzNkbnRpazE5d2xhNyJ9.Ezxvt9Mq-Gf8hvCUa3vbxA'




const Mapbox = ({lat, lon}) => {
	
	const mapContainer = useRef(null);
	const map = useRef(null);
	const timer = useRef(null)

useEffect(() => {
	if (map.current) return;
		map.current = new mapboxgl.Map({
		attributionControl: false,
		container: mapContainer.current,
		style: 'mapbox://styles/bobbyhewitt/clpxtkiaq001801pl4ss01kp7',
		center: {lon: lon, lat: lat},
		zoom: 15,
		
		offscreen:true,
		preserveDrawingBuffer:true
	})
		
	map.current.addControl(
		new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		// When active the map will receive updates to the device's location as it changes.
		trackUserLocation: true,
		// Draw an arrow next to the location dot to indicate which direction the device is heading.
		showUserHeading: true
	})
		)
	const marker1 = new mapboxgl.Marker()
		.setLngLat({lon: lon, lat: lat})
			.addTo(map.current);

	
},[]);


	return(
		<div style={{height:'400px', width: '100%', borderRadius:'20px', overflow:'hidden', marginBottom:'36px'}}ref={mapContainer} className="map-container" />
	)
}

export default Mapbox