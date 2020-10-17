import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImagesContainer = styled.View`
  height: 240px;
`;

export const ImagesScroll = styled.ScrollView``;

const image = {
  resizeMode: 'cover',
}

export const Img = styled.Image`
  width: ${Dimensions.get('window').width + 'px'};
  height: 240px;
  ${image}
`;

export const DetailsContainer = styled.View`
   padding: 24px;
`;

export const Title = styled.Text`
  color: #4D6F80;
  font-size: 30px;
  font-family: nunito700;
`;

export const Description = styled.Text`
  font-family: nunito600;
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`;

export const MapConatiner = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: #B3DAE2;
  margin-top: 40px;
  background-color: #E6F7FB;
`;

export const MapStyle = {
  width: '100%',
  height: 150,
};

export const RoutesButton = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RoutesText = styled.Text`
  font-family: nunito700;
  color: #0089a5;
`;

export const Separator = styled.View`
  height: 0.8px;
  width: 100%;
  background-color: #D3E2E6;
  margin: 40px 0;
`;

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

const ScheduleItem = css`
  width: 48%;
  padding: 20px;
`

const ScheduleText = css`
  font-family: nunito600;
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
`

export const ScheduleItemBlue = styled.View`
  ${ScheduleItem};
  background-color: #E6F7FB;
  border: 1px #B3DAE2;
  border-radius: 20px;
`;

export const ScheduleItemGreen = styled.View`
  ${ScheduleItem};
  background-color: #EDFFF6;
  border: 1px #A1E9C5;
  border-radius: 20px;
`;

export const ScheduleItemRed = styled.View`
  ${ScheduleItem};
  background-color: #FEF6F9;
  border: 1px #FFBCD4;
  border-radius: 20px;
`;

export const ScheduleTextBlue = styled.Text`
  ${ScheduleText};
  color: #5C8599;
`;

export const ScheduleTextGreen = styled.Text`
  ${ScheduleText};
  color: #37C77F;
`;

export const ScheduleTextRed = styled.Text`
  ${ScheduleText};
  color: #FF669D;
`;


export const ContactButton = styled.TouchableOpacity`
  background-color: #3CDC8C;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 40px;
`;

export const ContactButtonText = styled.Text`
  font-family: nunito800;
  color: #FFF;
  font-size: 16px;
  margin-left: 16px;
`;


export const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.Text`
  font-family: nunito800;
  font-size: 16px;
  color: #000;
`;
