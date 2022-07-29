import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import { map } from "./css/Styles.js"
import { Marker } from 'react-native-maps';

export default function MapScreen() {
  return (
    <View style={map.container}>
      <MapView style={map.map}
        
        initialRegion={{
            latitude: -23.54067438623579, 
            longitude: -46.57498976047001,
            latitudeDelta: 0.0020,
            longitudeDelta: 0.0015,
        }}
      > 
        <Marker
            title="Senac Tatuapé"
            description="Escola Técnica"
            coordinate={{
                latitude: -23.54086866659626,
                longitude: -46.57498975583688,
            }}
        />
      </MapView>
    </View>
)};