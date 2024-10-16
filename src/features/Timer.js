import { View, Text, StyleSheet,Vibration } from 'react-native';
import {ProgressBar} from 'react-native-paper'
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import {Timing} from './Timing'
import { useState } from 'react';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];



export const Timer = ({ focusSubject ,clearSubject,onTimerEnd}) => {
  // this will help to keep phone awake insted of going to sleep in the middle of the task
  useKeepAwake()
  const [isStarted, setIsStarted] = useState(false);
  const [progress,setProgress] = useState(0);
  const [minutes, setMinutes] = useState(0.1)


const onEnd = (reset)=>{
  Vibration.vibrate(PATTERN);
  setIsStarted(false);
  setProgress(1);
  reset()
  onTimerEnd(focusSubject)
  
}

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onEnd={onEnd}
          onProgress={setProgress}
        />

        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{paddingTop: spacing.sm}}>
      <ProgressBar 
        progress={progress}
        color={colors.progressBar}
        style={{height:2}}
      />
      </View>
      <View style={styles.timingWrapper}>
      
      <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>

<View style={styles.clearSubjectWrapper}>
<RoundedButton  size={50} title="-" onPress={clearSubject} />

</View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'cente',
    alignItems: 'center',
  },
  timingWrapper:{
    flex:0.1,
    flexDirection: 'row',
    paddingBottom: spacing.md,
    paddingTop: spacing.md
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  clearSubjectWrapper:{
    flexDirection:'row',
    justifyContent:'center'
  }
});
