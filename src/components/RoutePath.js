import React from 'react';
import { Polyline } from 'react-native-maps';

const RoutePath = ({ routeCoords }) => (
  <Polyline coordinates={routeCoords} strokeWidth={5} strokeColor="blue" />
);

export default RoutePath;
