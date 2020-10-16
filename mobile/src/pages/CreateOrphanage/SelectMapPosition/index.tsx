import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

import mapMarkerImg from '../../../images/map-marker.png';

import { Container, MapStyle, NextButton, NextButtonText } from './styles';

const SelectMapPosition: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNextStep() {
    navigate('OrphanageData');
  }

  return (
    <Container>
      <MapView
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={MapStyle}
      >
        <Marker
          icon={mapMarkerImg}
          coordinate={{ latitude: -27.2092052, longitude: -49.6401092 }}
        />
      </MapView>

      <NextButton onPress={handleNextStep}>
        <NextButtonText>Próximo</NextButtonText>
      </NextButton>
    </Container>
  );
};

export default SelectMapPosition;