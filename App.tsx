/* eslint-disable react/style-prop-object */
/* eslint-disable @typescript-eslint/no-use-before-define */
import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
   useFonts,
   Kodchasan_300Light as light,
   Kodchasan_400Regular as regular,
   Kodchasan_600SemiBold as bold,
   Kodchasan_700Bold as black,
} from '@expo-google-fonts/kodchasan';
import {
   RobotoCondensed_300Light as rLight,
   RobotoCondensed_400Regular as rRegular,
   RobotoCondensed_700Bold as rBold,
} from '@expo-google-fonts/roboto-condensed';

import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Botton } from './src/components/Botton';
import { Status } from './src/pages/Status';
import { Route } from './src/routes';

SplashScreen.preventAutoHideAsync();

export default function App() {
   const [fontsLoaded] = useFonts({
      light,
      regular,
      bold,
      black,
      rLight,
      rRegular,
      rBold,
   });

   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

   if (!fontsLoaded) {
      return null;
   }

   return (
      <View className="flex-1" onLayout={onLayoutRootView}>
         <Route />
         <StatusBar style="auto" />
      </View>
   );
}
