import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function Header({headerText, headerIcon}) {
  return (
    <View style={{flexDirection: 'row', marginTop: 16}}>
      <Text style={{flex: 1, fontSize: 24, fontWeight: '700'}}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={24} color="#1B1212"/>
    </View>
  )
}