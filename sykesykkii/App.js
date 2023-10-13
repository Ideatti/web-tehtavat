import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [lhr, setLhR] = useState(0)
  const [uhr, setUhR] = useState(0)

  function calculate() {
    const resultLhr = (220-age.replace(',','.')) * 0.65
    setLhR(resultLhr);
    const resultUhr = (220-age.replace(',','.')) * 0.85
    setUhR(resultUhr)
  }

  return (
    <View style={styles.container}>
      <Text style= {styles.field}>Age</Text>
      <TextInput 
       placeholder='Enter your Age'
       keyboardType='decimal-pad'
       value = {age}
       onChangeText={text => setAge(text)}
       style={styles.field}/>
       
      <Text style={styles.field}>Hr-Limits</Text>
      <Text style={styles.field}>{lhr.toFixed()} - {uhr.toFixed()}</Text>
      <Button title='Calculate' onPress={calculate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
});
