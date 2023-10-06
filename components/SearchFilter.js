import { View, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function SearchFilter({icon, placeholder}) {
  return (
    <View style={{backgroundColor: '#FFFFF0', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 16, borderRadius: 50, paddingHorizontal: 16, marginVertical: 24, shadowColor:'#000', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.1, shadowRadius: 7}}>
      <TextInput style={{paddingLeft:8, fontSize: 16, color: '#808080'}}>{placeholder}</TextInput>
      <FontAwesome name={icon} size={20} color="#505050" style={{paddingRight:8}}/>
    </View>
  )
}