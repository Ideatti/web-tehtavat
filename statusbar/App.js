import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Statusbar:in testiä!</Text>
      <StatusBar style="auto"
      //hidden={true}
      backgroundColor='green' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
   // alignItems: 'center',
  //justifyContent: 'center',
  },
});
