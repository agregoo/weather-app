import { View, Text, Pressable } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View className="flex-1 justify-center items-center bg-sky-500">

      <Text className="text-3xl font-bold text-white mb-8">
        Home Screen
      </Text>

      <Pressable
        onPress={() => navigation.navigate("Forecast")}
        className="bg-white px-6 py-3 rounded-xl"
      >
        <Text className="text-sky-600 font-bold">
          Ver previsão
        </Text>
      </Pressable>

    </View>
  );
}