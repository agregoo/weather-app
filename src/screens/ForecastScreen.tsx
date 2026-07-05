import { View, Text, Pressable } from "react-native";

export default function ForecastScreen({ navigation }: any) {
  return (
    <View className="flex-1 justify-center items-center bg-green-500">

      <Text className="text-3xl text-white font-bold mb-8">
        Forecast Screen
      </Text>

      <Pressable
        onPress={() => navigation.navigate("Details")}
        className="bg-white px-6 py-3 rounded-xl"
      >
        <Text className="text-green-600 font-bold">
          Ver detalhes
        </Text>
      </Pressable>

    </View>
  );
}