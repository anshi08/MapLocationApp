# MapLocationApp

## Description
A React Native app that displays a map, tracks the user’s location, and allows selecting a destination to calculate and display a route using the Google Maps Directions API.

## Dependencies
This project relies on the following npm packages:
- **[@mapbox/polyline](https://www.npmjs.com/package/@mapbox/polyline)**: ^1.2.1
- **[@react-native-community/geolocation](https://www.npmjs.com/package/@react-native-community/geolocation)**: ^3.3.0
- **[axios](https://www.npmjs.com/package/axios)**: ^1.7.4
- **[expo](https://www.npmjs.com/package/expo)**: ~51.0.28
- **[expo-status-bar](https://www.npmjs.com/package/expo-status-bar)**: ~1.12.1
- **[react](https://www.npmjs.com/package/react)**: 18.2.0
- **[react-native](https://www.npmjs.com/package/react-native)**: 0.74.5
- **[react-native-maps](https://www.npmjs.com/package/react-native-maps)**: ^1.18.0
- **[expo-location](https://www.npmjs.com/package/expo-location)**: ~17.0.1

### Example API Request

This project uses the Google Maps Directions API to calculate routes between two locations. Below is an example of how the API request is constructed:

https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${API_KEY}

- **Parameters**:
  - `origin.latitude`: The latitude of the starting point.
  - `origin.longitude`: The longitude of the starting point.
  - `destination.latitude`: The latitude of the destination point.
  - `destination.longitude`: The longitude of the destination point.
  - `API_KEY`: Your Google Maps API key stored in an environment variable or configuration file.

**Note**: Store your `API_KEY` in an environment variable (e.g., `REACT_APP_GOOGLE_MAPS_API_KEY`) and avoid hardcoding it in your code to ensure security.



## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/MapLocationApp.git
   cd MapLocationApp
