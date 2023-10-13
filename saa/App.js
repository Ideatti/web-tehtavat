import React from "react";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { SafeAreaView } from 'react-native-safe-area-context';
import Position from './components/Position';
import Weather from './components/Weather'
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 2 }}>
    <BottomSheetModalProvider>
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
       <Weather/>
       <Position/>
    </View>
    </SafeAreaView>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    //paddingTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
