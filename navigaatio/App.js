import React from 'react';
import Homescreen from './Homescreen';
import Secondscreen from './Secondscreen';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from 'react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{
          title:'Home',
          headerTitle: 'Home'
        }}
        />
        <Stack.Screen
          name="Second"
          component={Secondscreen}
          option={{
            title: 'Second',
            headerTitle: 'Second'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
