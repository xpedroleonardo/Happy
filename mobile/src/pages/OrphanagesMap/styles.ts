import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Map = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export const CalloutContainer = styled.View`
    width: 160px;
    height: 46px;
    padding: 0 16px ;
    background-color: rgba(255,255,255,0.8);
    border-radius: 16px;
    justify-content: center;
`;

export const CalloutText = styled.Text`
  font-family: nunito700;
  font-size: 14px;
  color: #0089a5;
`;

export const Footer = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;
  background-color: #FFF;
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterText = styled.Text`
  font-family: nunito700;
  color: #8fa7b3;
`;

export const CreateOrphanage = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

