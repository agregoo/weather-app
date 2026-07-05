import { View, Text, Pressable } from "react-native";

export default function DetailsScreen({ navigation }: any) {
  return (
    <View className="flex-1 justify-center items-center bg-purple-500">

      <Text className="text-3xl text-white font-bold mb-8">
        Details Screen
      </Text>

      <Pressable
        onPress={() => navigation.goBack()}
        className="bg-white px-6 py-3 rounded-xl"
      >
        <Text className="text-purple-600 font-bold">
          Voltar
        </Text>
      </Pressable>

    </View>
  );
}