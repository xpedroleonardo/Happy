import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import mapMarkerImg from '../../images/map-marker.png';

import {
  Container,
  ImagesContainer,
  ImagesScroll,
  Img,
  DetailsContainer,
  Title,
  Description,
  MapConatiner,
  MapStyle,
  RoutesButton,
  RoutesText,
  Separator,
  ScheduleContainer,
  ScheduleItemBlue,
  ScheduleTextBlue,
  ScheduleItemGreen,
  ScheduleTextGreen,
  ScheduleItemRed,
  ScheduleTextRed,
  ContactButton,
  ContactButtonText,
  Loading,
  LoadingText
} from './styles';
import api from '../../services/api';
import { Linking } from 'react-native';

interface RouteParams {
  id: number;
}

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>
}

const OrphanageDetails: React.FC = () => {
  const route = useRoute()
  const [Orphanage, setOrphanage] = useState<Orphanage>()

  const params = route.params as RouteParams

  useEffect(() => {
    api.get(`/orphanages/${params.id}`).then(({ data }) => setOrphanage(data))
  }, [params.id])

  if (!Orphanage) {
    return (
      <Loading>
        <LoadingText>Carregando...</LoadingText>
      </Loading>
    )
  }

  function OpenGoogleMaps() {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${Orphanage?.latitude},${Orphanage?.longitude}`)
  }

  return (
    <Container>
      <ImagesContainer>
        <ImagesScroll horizontal pagingEnabled>

          {Orphanage.images.map(image => (
            <Img key={image.id} source={{ uri: image.url }} />
          ))}

        </ImagesScroll>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{Orphanage.name}</Title>
        <Description>{Orphanage.about}</Description>

        <MapConatiner>
          <MapView
            initialRegion={{
              latitude: Orphanage.latitude,
              longitude: Orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={MapStyle}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: Orphanage.latitude,
                longitude: Orphanage.longitude
              }}
            />
          </MapView>

          <RoutesButton onPress={OpenGoogleMaps}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesButton>
        </MapConatiner>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{Orphanage.instructions}</Description>

        <ScheduleContainer >
          <ScheduleItemBlue>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleTextBlue>Segunda à Sexta {Orphanage.opening_hours}</ScheduleTextBlue>
          </ScheduleItemBlue>

          {Orphanage.open_on_weekends ? (

            <ScheduleItemGreen>
              <Feather name="info" size={40} color="#39CC83" />
              <ScheduleTextGreen >Atendemos fim de semana</ScheduleTextGreen>
            </ScheduleItemGreen>

          ) : (

              <ScheduleItemRed>
                <Feather name="info" size={40} color="#FF669D" />
                <ScheduleTextRed >Não atendemos fim de semana</ScheduleTextRed>
              </ScheduleItemRed>

            )}


        </ScheduleContainer>

        {/* <ContactButton onPress={() => { }}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton> */}
      </DetailsContainer>
    </Container>
  );
};

export default OrphanageDetails;