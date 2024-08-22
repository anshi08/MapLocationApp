import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    return (
      <View style={styles.container}>
        <Text style={styles.Loader}>Map Loading...</Text>
      </View>
    );
  }

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      Loader: {
        fontSize: 18,
        color: 'red',
      },
  });

export default MapScreen;


