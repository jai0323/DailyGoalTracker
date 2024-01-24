import { StyleSheet,View,Text, Pressable } from "react-native";

function GoalItem({itemData,ondelete}) {
 

    return(
        <View style={styles.gaolItem}>
        <Pressable android_ripple={{color:'white'}} onPress={ondelete.bind(this,itemData.item.id)}
        style={({pressed})=> pressed && styles.pressedItem}
        >
            <Text style={styles.text1} >{itemData.item.text}</Text>
        </Pressable>
        </View>
    )
}
export default GoalItem;

const styles = StyleSheet.create({
    gaolItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:'#5e0acc',
        
        color:'white',
        
      },
      pressedItem:{
        opacity:0.5
      },
      text1:{
        color:'white',
        padding:8,
      }
})