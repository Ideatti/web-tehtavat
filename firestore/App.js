import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { MESSAGES, collection, firestore,serverTimestamp, addDoc } from './firebase/Config';
import { useEffect, useState } from 'react';
import { onSnapshot, orderBy, query } from 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { convertFirebaseTimeStampToJS } from './helpers/Functions';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'


export default function App() {
  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(()=>{
    const q = query(collection(firestore,MESSAGES),orderBy('created','desc'))

      const unsubscribe = onSnapshot(q,(querySnapshot) => {
        const tempMessages = []

        querySnapshot.forEach((doc)=>{
          const messageObject = {
            id: doc.id,
            text: doc.data().text,
            created: convertFirebaseTimeStampToJS(doc.data().created)
          }
          tempMessages.push(messageObject)
        })
        setMessages(tempMessages)
      })
      return () => {
        unsubscribe
      }
  })

  const save = async () => {
    const docRef = await addDoc(collection(firestore,MESSAGES), {
          text: newMessage,
          created: serverTimestamp()
    }).catch (error => console.log(error))
    setNewMessage('')
    console.log('Message saved')
  };

  return (
    <GestureHandlerRootView style={{ flex: 2 }}>
    <BottomSheetModalProvider>
    <SafeAreaView style={styles.container}>
     <ScrollView>
        {
          messages.map((message) =>
          <View style={styles.message} key={message.id}>
            <Text style={styles.messageInfo}>{message.created}</Text>
            <Text>{message.text}</Text>
          </View>)
        }
      </ScrollView>  
      <View>
      <TextInput style={styles.input} placeholder='Enter message...' value={newMessage} onChangeText={text => setNewMessage(text)}/>
      <Button title ="Save" onPress={save}/>  
      </View>
    </SafeAreaView>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   message: {
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10
   },
   messageInfo:{
    fontSize: 12,
   },
   input:{
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    fontSize: 14,
   },
});
