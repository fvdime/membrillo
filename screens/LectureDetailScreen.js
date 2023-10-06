import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function LectureDetailScreen({ route }) {
  const navigation = useNavigation();

  const { item } = route.params;

  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          paddingHorizontal: 16,
          paddingTop: 8,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={28} color="#EAECEE" />
        </Pressable>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#EAECEE",
          flex: 1,
          marginTop: 256,
          borderTopLeftRadius: 48,
          borderTopRightRadius: 48,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{ height: 300, width: 300, position: "absolute", top: -150 }}
        >
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>

        <Text style={{ marginTop: 160, fontSize: 24, fontWeight: "bold" }}>
          {item.name}
        </Text>

        <View style={{flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontSize: 16, marginVertical: 16 }}>{item.desc}</Text>

          <View
            style={{
              flexDirection: "row",
              gap: 4,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "#AED6F1",
                paddingHorizontal: 24,
                paddingVertical: 8,
                borderRadius: 8,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: 500 }}>❀ </Text>
              <Text style={{ fontWeight: "800" }}>{item.time}</Text>
            </View>

            <View
              style={{
                backgroundColor: "#7DCEA0",
                paddingHorizontal: 24,
                paddingVertical: 8,
                borderRadius: 8,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: 500 }}>❀ </Text>
              <Text style={{ fontWeight: "800" }}>{item.difficulty}</Text>
            </View>

            <View
              style={{
                backgroundColor: "#D7BDE2",
                paddingHorizontal: 24,
                paddingVertical: 8,
                borderRadius: 8,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: 500 }}>❀ </Text>
              <Text style={{ fontWeight: "800" }}>{item.calories}</Text>
            </View>
          </View>

          <View style={{ alignSelf: "flex-start", marginVertical: 32 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 4 }}>
              Include:
            </Text>
            {item.includes.map((include) => {
            return(
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "red",
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                  }}
                ></View>
                <Text style={{ fontSize: 16, marginLeft: 4 }}>{include}</Text>
              </View>
              )
            })}
          </View>

          <View style={{ alignSelf: "flex-start", marginTop: 16, marginBottom: 32 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 4 }}>
              Steps:
            </Text>
            {item.steps.map((step, index) => {
            return(
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 16, marginLeft: 4 }}>{`${ index + 1 }-) ${step}`}</Text>
              </View>
              )
            })}
          </View>
        </ScrollView>
        </View>
      </View>
    </View>
  );
}
