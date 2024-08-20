import {View,  StyleSheet} from 'react-native'
import {colors} from '../utils/colors'
import {TextInput} from 'react-native-paper'
import  {useState} from 'react'
import {RoundedButton} from '../components/RoundedButton'
import {spacing} from '../utils/sizes'

export const Focus=({addSubject})=>{

const [subject, setSubject] = useState('')
console.log(subject)

// this what i mean when i use usState to get value from input to keep this value
// (val) => setSubject(val)

return(
<View style={styles.container}>
<View style={styles.inputContainer}>
<TextInput 
style={styles.textInput}
label='What would like go focus on?'
onChangeText={setSubject}
/>
<View style={styles.button} >
<RoundedButton title='+' size={50} onPress={()=> addSubject(subject)}/>
</View>
</View>

</View>
);
}

const styles = StyleSheet.create({
  container:{
    flex:0.2,
  },
  button:{
    justifyContent:'center'
  },
  textInput:{
    flex:0.9,
    marginRight:10,
    color: colors.white
  },
  inputContainer:{
   justifyContent:'top',
   flexDirection: 'row',
   padding: spacing.md,
   color: colors.white
  },
})