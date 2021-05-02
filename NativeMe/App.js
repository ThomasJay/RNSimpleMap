/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import MapView, {Marker, Callout} from 'react-native-maps';

const App: () => React$Node = () => {
  const [markers, setMarkers] = useState([
    {
      id: 1,
      latitude: 33.7872131,
      longitude: -84.381931,
      title: 'Flatiron School Atlanta.',
      description: 'This is where the magic happens!',
    },
    {
      id: 2,
      latitude: 33.7872241,
      longitude: -84.382941,
      title: 'Flatiron School Atlanta.',
      description: 'This is where the magic happens!!',
    },
  ]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <MapView
          style={{...StyleSheet.absoluteFillObject, height: 400}}
          initialRegion={{
            latitude: 33.7872131,
            longitude: -84.381931,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          {markers.map((marker) => {
            console.log('marker ' + marker.description);
            return (
              <Marker
                key={marker.id}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.title}
                description={marker.description}>
                <Callout tooltip>
                  <View>
                    <View style={styles.bubble}>
                      <Text style={styles.name}>Favourite Restaurant</Text>
                      <Text>A short description</Text>
                      <Image
                        style={styles.image}
                        source={require('./assets/banners/food-banner1.jpg')}
                      />
                    </View>
                    <View style={styles.arrowBorder} />
                    <View style={styles.arrow} />
                  </View>
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'blue',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'red',
    height: 600,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  // Callout bubble
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character image
  image: {
    width: '100%',
    height: 80,
  },
});

export default App;
