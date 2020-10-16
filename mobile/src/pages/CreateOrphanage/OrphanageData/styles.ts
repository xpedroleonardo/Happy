import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  color: #5c8599;
  font-size: 24px;
  font-family: nunito700;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom-width: 0.8px;
  border-bottom-color: #D3E2E6;
`;

export const Label = styled.Text`
  color: #8fa7b3;
  font-family: nunito600;
  margin-bottom: 8px;
`;

const InputStyle = css`
  background-color: #fff;
  border-width: 1.4px;
  border-color: #d3e2e6;
  border-radius: 20px;
  height: 56px;
  padding: 18px 24px;
  margin-bottom: 16px;
`

const Align = {
  textAlignVertical: "top"
}

export const Input = styled.TextInput`
  ${Align};
  ${InputStyle};
`;

export const TextArea = styled.TextInput`
  ${Align};
  ${InputStyle};
  height: 110px;
`;

export const ImagesInput = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.5);
  border: 1.4px dashed #96D2F0;
  border-radius: 20px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 32px;
`;

export const NextButtonText = styled.Text`
  font-family: nunito800;
  font-size: 16px;
  color: #FFF;
`;