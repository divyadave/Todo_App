/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState }  from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Task from './android/components/Task';




function App() {
  const [task, setTask] = useState()
  const [taskItems, setItems] = useState([])
  const handleTask = () => {
    Keyboard.dismiss();
    
    setItems([...taskItems, task])
    setTask(null)
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setItems(itemsCopy)

  }
  return (
  <View style={styles.container}>
    <View style={styles.tasksWrappper}>
      <Text style={styles.taskSubtitle}>Today's Tasks</Text>
    </View>
    <View style={styles.items}>
     {
       taskItems.map((item, index) => (
       <TouchableOpacity key={index} onPress={() => completeTask(index)}>
         <Task key={index} text={item}></Task>

       </TouchableOpacity>
       ))
     }

    </View>
    <KeyboardAvoidingView behaviour={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
    <TextInput style={styles.input} value={task} placeholder='Write Task' onChangeText={text => setTask(text)}></TextInput>
    <TouchableOpacity onPress={() => handleTask()}>
      <View style={styles.addWrapper}><Text style={styles.addText}>+</Text></View>
    </TouchableOpacity>
    </KeyboardAvoidingView>

  </View>
  )
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   marginHorizontal: 20,
  
  
 },
 tasksWrappper: {
   paddingTop: 80,
   paddingHorizontal: 20
   
 },
 taskSubtitle: {
   fontSize: 24,
   fontWeight: 'bold',
   color: 'black'
 },
 writeTaskWrapper: {
   position: 'absolute',
   bottom: 15,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '100%'

 },
 input: {
   paddingVertical: 15,
   paddingHorizontal: 20,
   width: 250,
   backgroundColor: '#fff',
   borderRadius: 60,
   borderColor: '#C0C0C0',
   borderWidth: 1

 },
 addWrapper: {
   width: 60,
   height: 60,
   backgroundColor: '#FFF',
   borderRadius: 60,
   justifyContent: 'center',
   alignItems: 'center',
   borderColor: '#C0C0C0',
   borderWidth: 1

 },
 addText: {


 }
});

export default App;
