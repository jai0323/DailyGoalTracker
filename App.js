import { View , TextInput , Text, Button, ScrollView, StyleSheet, FlatList} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
export default function App(){

  
  const [goals,setGoals] = useState([]);
  const [modalVisible,setModalVisible]=useState(false)

  function startGoalhandler(){
    setModalVisible(true)
    //console.log("sdkf")
  }
  function closeModal(){
    setModalVisible(false);
    //console.log("kasd")
}

  function addGoalhandler(enterGoalText) {
    setGoals((currentGoal)=>[...currentGoal,
      {text: enterGoalText, id:Math.random().toString()},
    ]);  
    closeModal();
  };

  function deleteGoalHandler(id){
    setGoals((currentGoal)=>{
      return currentGoal.filter((goal)=>goal.id!==id)
    });
  };


  return (
    <>
    <StatusBar style='dark'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color={'#5e0acc'} onPress={startGoalhandler}/>
      {modalVisible && <GoalInput onAddGoal={addGoalhandler} visible={modalVisible} onCancel={closeModal} />}
      <View style={styles.goal}>
        <FlatList data={goals}
        renderItem={(itemData)=>{
          return(
            <GoalItem itemData={itemData} ondelete={deleteGoalHandler}/>
            );
          }
        }
        keyExtractor={(item,index)=>{return item.id}}
        />
      </View>
    </View>
    </>
  )
}

const styles= StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor:"#e4d0ff"
  },
  
  goal:{
    flex:4,
  }
  
})