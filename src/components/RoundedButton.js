import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors'

export const RoundedButton =({
  style={},
  textStyle={},
  size=150,
  ...props
}) =>{
  return(
    <TouchableOpacity
    style={[styles(size).radius, style]}
    onPress={props.onPress}
    >
    
    <Text
    style={[styles(size).text,textStyle]}
    >
    {props.title}
    
    </Text>

    </TouchableOpacity>
  )
};

const styles =(size)=>({

  radius:{
    borderRadius: size / 2,
    width :size,
    height:size,
    alingItems :'center',
    justifyContent:'center',
    borderColor : colors.white,
    borderWidth: 2,
    margin:'auto' 

  },
  text:{
    color: colors.white,
    fontSize: size / 4,
    justifyContent:'center',
    margin:'auto',
    
  }
})