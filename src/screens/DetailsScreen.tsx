import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function DetailsScreen({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-sky-500">
      <View className="flex-1 px-6">
        <View className="flex-row items-center mt-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>

          <Text className="text-white text-2xl font-bold ml-4">
            Voltar a Home
          </Text>
        </View>

        <View className="items-center mt-10">
          <Text className="text-sky-100 text-xl">Luanda</Text>

          <Feather name="sun" size={90} color="white" />

          <Text className="text-white text-6xl font-bold mt-4">24°</Text>

          <Text className="text-sky-100 text-xl mt-2">
            Parcialmente Nublado
          </Text>
        </View>

        <View className="bg-white rounded-3xl mt-10 p-6">
          <View className="flex-row justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="thermometer-outline" size={20} color="#0284c7" />
              <Text className="text-gray-500 ml-2">Sensação Termica</Text>
            </View>

            <Text className="font-bold">26°C</Text>
          </View>

          <View className="flex-row justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="water-outline" size={20} color="#0284c7" />
              <Text className="text-gray-500 ml-2">Humidade</Text>
            </View>

            <Text className="font-bold">82%</Text>
          </View>

          <View className="flex-row justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="speedometer-outline" size={20} color="#0284c7" />
              <Text className="text-gray-500 ml-2">Vento</Text>
            </View>

            <Text className="font-bold">18 km/h</Text>
          </View>

          <View className="flex-row justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="analytics-outline" size={20} color="#0284c7" />
              <Text className="text-gray-500 ml-2">Pressão</Text>
            </View>

            <Text className="font-bold">1014 hPa</Text>
          </View>

          <View className="flex-row justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="eye-outline" size={20} color="#0284c7" />
              <Text className="text-gray-500 ml-2">Visibilidade</Text>
            </View>

            <Text className="font-bold">10 km</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Forecast")}
          className="bg-blue-900 rounded-2xl py-4 mt-8"
        >
          <Text className="text-center text-white text-lg font-bold">
            Ver previsão dos próximos dias
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
