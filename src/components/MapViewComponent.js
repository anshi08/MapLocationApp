import React from 'react';
import MapView from 'react-native-maps';

const MapViewComponent = ({ region, onRegionChange, onPress, children }) => (
  <MapView
    style={{ flex: 1 }}
    region={region}
    onRegionChangeComplete={onRegionChange}
    onPress={onPress}
  >
    {children}
  </MapView>
);

export default MapViewComponent;
