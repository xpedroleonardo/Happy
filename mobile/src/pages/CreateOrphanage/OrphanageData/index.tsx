import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'

import {
  Container,
  Title,
  Label,
  Input,
  TextArea,
  UploadedImagesContainer,
  UploadedImage,
  ImagesInput,
  SwitchContainer,
  NextButton,
  NextButtonText
} from './styles';

import api from '../../../services/api';

interface OrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

const OrphanageData: React.FC = () => {
  const route = useRoute()
  const { navigate } = useNavigation()
  const params = route.params as OrphanageDataRouteParams

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekeds] = useState(false)
  const [images, setImages] = useState<string[]>([])


  async function handleCreateOrphanage() {
    const { latitude, longitude } = params.position

    const data = new FormData()

    data.append('name', name)
    data.append('about', about)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('instructions', instructions)
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))


    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,

      } as any)
    })

    await api.post('orphanages', data)

    navigate('OrphanagesMap')
  }

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('Eita, precisamos de acesso ás suas fotos...')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    })

    if (result.cancelled) {
      return
    }

    const { uri: image } = result

    setImages([...images, image])
  }


  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title >Dados</Title>

      <Label>Nome</Label>
      <Input value={name} onChangeText={setName} />

      <Label >Sobre</Label>
      <TextArea multiline value={about} onChangeText={setAbout} />

      {/* <Label>Whatsapp</Label>
      <Input /> */}

      <Label>Fotos</Label>

      <UploadedImagesContainer>
        {images.map(image => (
          <UploadedImage key={image} source={{ uri: image }} />
        ))}
      </UploadedImagesContainer>

      <ImagesInput onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImagesInput>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <TextArea multiline value={instructions} onChangeText={setInstructions} />

      <Label>Horario de visitas</Label>
      <Input value={opening_hours} onChangeText={setOpeningHours} />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekeds}
        />
      </SwitchContainer>

      <NextButton onPress={handleCreateOrphanage}>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  );
};

export default OrphanageData;