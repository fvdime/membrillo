import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { categories } from "../constants";

export default function Categories() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, i) => {
          return (
            <TouchableOpacity key={i}>
              <View
                style={{
                  backgroundColor: i === 0 ? "#1B1212" : "#FAF9F6",
                  marginRight: 8,
                  borderRadius: 50,
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 7,
                  marginVertical: 16,
                }}
              >
                <Text style={{ color: i === 0 ? "#fff" : "#1B1212" }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
