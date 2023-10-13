import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { StyleSheet } from 'react-native';
import DATA from './DATA';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import Row from './components/Row';

export default function App() {

  
/*
function renderRow({item}){return (<Text>{item.lastname}</Text>);}
*/
/*
const renderRow = ({item}) => (<Text>{item.lastname}</Text>);
*/

return (
    <GestureHandlerRootView style={{ flex: 2 }}>
    <BottomSheetModalProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
        <Row item={item}/>
        )}
    >
    </FlatList>
    </SafeAreaView>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

