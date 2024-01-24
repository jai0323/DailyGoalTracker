import { useState } from "react";
import { StyleSheet,View,TextInput,Button, Modal, Image } from "react-native";

function GoalInput(props) {
    const [enterGoalText,setEnterGoalText] = useState('');
     
    function gaolInputHandler(enterText) {
      setEnterGoalText(enterText)
    };

    function addGoalhandler(){
        props.onAddGoal(enterGoalText)
        setEnterGoalText('')
    }
    
    
return(
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image source={require('../assets/Images/target.png') } style={styles.image}/>
            <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={gaolInputHandler} value={enterGoalText}/>
            <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
                <Button title="Add Goal" onPress={addGoalhandler}
                 color='#5e0acc'/>
            </View>
            <View style={styles.buttons}>
                <Button title="Cancel" onPress={props.onCancel}
                color='#f31282'/>
            </View>
            
        </View>
        
        </View>
    </Modal>
)
}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        
    
      },
      textInput:{
        borderWidth:1,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        width:'80%',
        marginRight:8,
        padding:14,
        color:'#120438',
        borderRadius:5
      },
      buttonContainer:{
        flexDirection:"row",
        margin:10
      },
      buttons:{
        width:'30%',
        marginHorizontal:20
      },
      image:{
        width:100,
        height:100,
        margin:20
      }
})