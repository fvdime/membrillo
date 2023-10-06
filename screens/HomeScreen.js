import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import Categories from '../components/Categories'
import LectureCard from '../components/LectureCard'


export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1,
      marginTop:StatusBar.currentHeight,
      marginHorizontal: 16}}>
      <Header headerText={'Hi Faya!'} headerIcon={"bell-o"}/>
      <SearchFilter icon={'search'} placeholder={'Something'}/>

      <View>
        <Text style={{ fontSize: 22, fontWeight: 'bold'}}>Categories</Text>
        <Categories/>
      </View>

      <View style={{flex: 1, marginTop: 16, marginBottom: 32}}>
        <Text style={{ fontSize: 22, fontWeight: 'bold'}}>Lectures</Text>
        <LectureCard/>
      </View>
    </SafeAreaView>
  )
}