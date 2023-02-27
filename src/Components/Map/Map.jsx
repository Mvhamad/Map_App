import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { API_KEY } from './googleMapsConfig';
import "./map.css"

function Map() {
    const mapRef = useRef(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: API_KEY,
            version: 'weekly',
            libraries: ['places']
        });

        loader.load().then(() => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 14.70, lng: -17.45 },
                zoom: 15
            });

            const marker = new window.google.maps.Marker({
                position: { lat: 14.70, lng: -17.45 },
                map: map,
                title: 'My Location'
            });
        });
    }, []);

    return <div ref={mapRef} style={{ width: '100%', height: '92vh'}}>

    </div>;
}

export default Map;
