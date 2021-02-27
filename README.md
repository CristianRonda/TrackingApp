# Tracking App

This application records the position in the local storage of the device and shows the saved route, time in HH:mm and distance in km on the map.

 To calculate the distance I used Haversine formula:

<img src="https://res.cloudinary.com/dzh1db41l/image/upload/v1614463137/haversine_zp3wcm.png" alt='haversine-formula'  />

# Libraries
- Save in local storage: `redux`
- Geolocation: `react-native-background-geolocation`
  
## Why use react-native-background-geolocation?

react-native-background-geolocation is the best library to management battery and events in the listening of geolocation. This library is free for development in iOS but in android is required the api key.

# Screenshot

## Save the trip

<img src="https://media.giphy.com/media/iTd2VCKtiQi85rYz7V/giphy.gif">

## Review past roads

<img src="https://media.giphy.com/media/pT4Z3F3cj5Q5QsFquX/giphy.gif" />

# How to Run

1. Run `yarn`
2. Run `npx pod-install ios`
3. Run `yarn ios` or `yarn android`