import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';


import { Container, Map, CalloutContainer, CalloutText, Footer, FooterText, CreateOrphanage } from './styles';


import mapMarker from '../../images/map-marker.png'

const OrphanagesMap: React.FC = () => {

  const { navigate } = useNavigation()

  function goToOrphanageDetails() {
    navigate('OrphanageDetails')
  }


  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={Map}
        initialRegion={{
          latitude: -23.4747317,
          longitude: -46.335891,
          latitudeDelta: 0.030,
          longitudeDelta: 0.030
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}
          coordinate={{
            latitude: -23.4747317,
            longitude: -46.335891,
          }}
        >
          <Callout tooltip onPress={goToOrphanageDetails} >
            <CalloutContainer>
              <CalloutText>Raio de Sol</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
      </MapView>

      <Footer>
        <FooterText>X orfanatos encontrados</FooterText>

        <CreateOrphanage onPress={() => { }}>
          <Feather name="plus" size={20} color="#FFF" />
        </CreateOrphanage>
      </Footer>
    </Container>
  );
}

export default OrphanagesMap;