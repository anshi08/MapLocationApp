import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../utils/api";

const useLiveLocation = () => {
    const [liveLocation, setLiveLocation] = useState(null);

    useEffect(() => {
        const liveLoc = async () => {
            try {
                const response = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${API_KEY}`);
                setLiveLocation(response.data.location);
            } catch (error) {
                console.error("Error fetching live location:", error);
            }
        };

        liveLoc();
    }, []);

    return liveLocation;
};

export default useLiveLocation;
