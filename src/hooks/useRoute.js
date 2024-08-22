import { useState, useEffect } from 'react';
import axios from 'axios';
import { decode } from '@mapbox/polyline';
import { API_KEY } from '../utils/api';

const useRoute = (origin, destination) => {
  const [routeCoords, setRouteCoords] = useState([]);

  useEffect(() => {
    const fetchRoute = async () => {
      if (origin && destination) {
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${API_KEY}`
          );
          console.log("Data",response.data)
          if (response.data.status === "OK" && response.data.routes.length > 0) {
            const points = decode(response.data.routes[0].overview_polyline.points);
            const coords = points.map(point => ({
              latitude: point[0],
              longitude: point[1],
            }));
            setRouteCoords(coords);
          } else {
            console.log('No routes found or request denied:', response.data.status);
            alert('Unable to fetch route. Please try again later.');
          }
        } catch (error) {
          console.error('Error fetching route:', error);
          alert('An error occurred while fetching the route. Please check your network connection or API key.');
        }
      }
    };

    fetchRoute();
  }, [origin, destination]);

  return routeCoords;
};

export default useRoute;
