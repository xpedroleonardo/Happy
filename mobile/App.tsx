import React from 'react';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {

  let [fontsLoaded] = useFonts({
    nunito600: Nunito_600SemiBold,
    nunito700: Nunito_700Bold,
    nunito800: Nunito_800ExtraBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <Routes />
}

