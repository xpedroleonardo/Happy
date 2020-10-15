import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
  padding-top: ${statusBarHeight + 'px'};
  flex: 1;
`;