import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/core";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 z-50 self-center w-full shadow-md">
      <TouchableOpacity
        className=" mx-5 bg-[#00CCBB]  p-4 flex-row rounded-lg space-x-1 items-center"
        onPress={() => {
          navigation.navigate("BasketScreen");
        }}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] rounded-sm py-1 px-2">
          {items.length}
        </Text>
        <Text className="text-white flex-1 font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="inr" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
