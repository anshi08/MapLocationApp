import React from 'react';
import { Marker } from 'react-native-maps';

const LocationMarker = ({ coordinate }) => (
  <Marker coordinate={coordinate} title="Your Location" />
);

export default LocationMarker;
