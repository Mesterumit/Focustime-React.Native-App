 import { Text, SafeAreaView, StyleSheet,Platform,StatusBar,View } from 'react-native';
import {colors} from './src/utils/colors'
import {Focus} from './src/features/Focus'
import {Timer} from './src/features/Timer'
import {useState} from 'react'
import {FocusHistory} from './src/features/FocusHistory'

export default function App() {
  
  const [currentSubject, setCurrentSubject] = useState('test');
  const [history, setHistory] = useState([]);
  // for android , "safeAreaview is not working properly "
  // you need to use padding from top to put text in the place you want
  return (
    <SafeAreaView style={styles.container}>
    {!currentSubject ? (
      <>
       <Focus addSubject={setCurrentSubject}/> 
       <FocusHistory  history={history}/>
       </>
       
    ) : ( 
    <Timer 
    focusSubject={currentSubject}
    onTimerEnd={(subject)=> {
      setHistory([...history, subject])
    }}
    clearSubject={()=> setCurrentSubject(null)}
    ></Timer>
   
 ) }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // in that wway if it is IOS , You don't need to have a padding 
    // because , safeAreaview is solving the problme
    paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight  : 0,
    backgroundColor:  colors.darkBlue
  },
});

// StatusBar is giving height to from top such as from time , charge icon, wifi icon and signal icon . So we don't need to add and extra "px" for that 