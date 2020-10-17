import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView, { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../../images/map-marker.png';

import { Container, MapStyle, NextButton, NextButtonText } from './styles';

const SelectMapPosition: React.FC = () => {
  const { navigate } = useNavigation();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  function handleNextStep() {
    navigate('OrphanageData', { position });
  }

  function MapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate)
  }

  return (
    <Container>
      <MapView
        initialRegion={{
          latitude: -23.4747317,
          longitude: -46.335891,
          latitudeDelta: 0.030,
          longitudeDelta: 0.030
        }}
        style={MapStyle}
        onPress={MapPosition}
      >

        {position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{ latitude: position.latitude, longitude: position.longitude }}
          />
        )}
      </MapView>

      {position.latitude !== 0 && (
        <NextButton onPress={handleNextStep}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  );
};

export default SelectMapPosition;