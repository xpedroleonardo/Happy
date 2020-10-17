import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import { Container, Map, CalloutContainer, CalloutText, Footer, FooterText, CreateOrphanage } from './styles';


import mapMarker from '../../images/map-marker.png'
import api from '../../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])
  const { navigate } = useNavigation()


  useFocusEffect(() => {
    api.get('/orphanages').then(({ data }) => {
      setOrphanages(data)
    })
  })

  function goToOrphanageDetails(id: number) {
    navigate('OrphanageDetails', { id })
  }

  function goToCreateOrphanage() {
    navigate('SelectMapPosition')
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

        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8
            }}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
            <Callout tooltip onPress={() => goToOrphanageDetails(orphanage.id)} >
              <CalloutContainer>
                <CalloutText>{orphanage.name}</CalloutText>
              </CalloutContainer>
            </Callout>
          </Marker>
        ))}

      </MapView>

      <Footer>
        <FooterText>{orphanages.length} orfanatos encontrados</FooterText>

        <CreateOrphanage onPress={goToCreateOrphanage}>
          <Feather name="plus" size={20} color="#FFF" />
        </CreateOrphanage>
      </Footer>
    </Container>
  );
}

export default OrphanagesMap;