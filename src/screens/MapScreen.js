import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import useLocation from '../hooks/useLocation';
import useRoute from '../hooks/useRoute';

const MapScreen = () => {
  const [destination, setDestination] = useState(null);
  const origin = useLocation();
  const routeCoords = useRoute(origin, destination);

  const handleMapPress = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setDestination({ latitude, longitude });
  };

  if (!origin) {
    return <Text>Loading...</Text>;
  }

  console.log(routeCoords)

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      onPress={handleMapPress}
    >
      <Marker coordinate={origin} title="Your Location" />
      {destination && <Marker coordinate={destination} title="Destination" />}
      {routeCoords.length > 0 && (
        <Polyline coordinates={routeCoords} strokeWidth={5} strokeColor="blue" />
      )}
    </MapView>
  );
};

export default MapScreen;
