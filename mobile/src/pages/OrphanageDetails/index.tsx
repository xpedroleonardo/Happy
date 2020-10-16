import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

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
  RoutesContainer,
  RoutesText,
  Separator,
  ScheduleContainer,
  ScheduleItemBlue,
  ScheduleTextBlue,
  ScheduleItemGreen,
  ScheduleTextGreen,
  ContactButton,
  ContactButtonText
} from './styles';

const OrphanageDetails: React.FC = () => {
  return (
    <Container>
      <ImagesContainer>
        <ImagesScroll horizontal pagingEnabled>
          <Img source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
          <Img source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
          <Img source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
        </ImagesScroll>
      </ImagesContainer>

      <DetailsContainer>
        <Title>Orf. Esperança</Title>
        <Description>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</Description>

        <MapConatiner>
          <MapView
            initialRegion={{
              latitude: -27.2092052,
              longitude: -49.6401092,
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
                latitude: -27.2092052,
                longitude: -49.6401092
              }}
            />
          </MapView>

          <RoutesContainer>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapConatiner>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>Venha como se sentir a vontade e traga muito amor e paciência para dar.</Description>

        <ScheduleContainer >
          <ScheduleItemBlue>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleTextBlue>Segunda à Sexta 8h às 18h</ScheduleTextBlue>
          </ScheduleItemBlue>
          <ScheduleItemGreen>
            <Feather name="info" size={40} color="#39CC83" />
            <ScheduleTextGreen >Atendemos fim de semana</ScheduleTextGreen>
          </ScheduleItemGreen>
        </ScheduleContainer>

        <ContactButton onPress={() => { }}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
};

export default OrphanageDetails;