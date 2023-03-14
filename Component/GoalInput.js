import {TextInput, StyleSheet, Button, View, Modal, Image} from "react-native";
import {useState} from "react";

function GoalInput(props){
    const[enteredGoalText, setEnteredGoalText]=useState("");
    function goalInputHandler(enteredText){
        setEnteredGoalText (enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return(
        <Modal>
        <View style={styles.inputContainer}>
         <Image style={styles.image}
                source={require('../assets/images/goal.png')} />
            <TextInput
                style={styles.TextInput}
                       placeholder={'Your course goal'}
                       onChangeText={goalInputHandler}
                       value = {enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style = {styles.button}>
                <Button title={"Add Goal"} onPress={addGoalHandler} color={"#5e0acc"}/>
                </View>
                <View style = {styles.button}>
                <Button title={"cancel"} onPress={props.onCancel} color={"#f31282"} />
                </View>
            </View>

        </View>
        </Modal>
    );

}

export default GoalInput;
const styles = StyleSheet.create({

    inputContainer:{
        flex: 1,
        justifyContent :'center',
        alignItems : 'center',
        paddingBottom: 30,
        borderBottomColor :'#cccccc',
        padding:16,
        backgroundColor: '#311b6b',
    },
    image :{
       width : 100 ,
        height: 100,
        margin: 20,
    },
    TextInput: {
        borderWidth: 1,
        borderRadius: 6,
        marginRight: 8,
        padding: 16,
        borderColor: '#e4d0ff',
        width: '100%',
        color: "#120438",
        backgroundColor: "#e4d0ff",

        },
    buttonContainer: {
        marginTop:16,
        flexDirection: "row" ,
    },
    button :{

        width:100,
        marginHorizontal: 8
    }
    }
)

