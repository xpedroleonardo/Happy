import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const MapStyle = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export const NextButton = styled.TouchableOpacity`
  background: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;

  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 40px;
`;

export const NextButtonText = styled.Text`
  font-family: nunito800;
  font-size: 16;
  color: #FFF;
`;
