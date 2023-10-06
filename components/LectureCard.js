import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { lectures } from "../constants";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function LectureCard() {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={lectures}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("LectureDetail", {item: item})}
            style={{
              backgroundColor: "#FAF9F6",
              borderRadius: 16,
              marginVertical: 12,
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 24,
            }}
            key={item.id}
          >
            <Image
              source={item.image}
              style={{ width: 152, height: 152, resizeMode: "center" }}
            />
            <Text>{item.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                <FontAwesome name="star" size={16} color="#F3E5AB" />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
