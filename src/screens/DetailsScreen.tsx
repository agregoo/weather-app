import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function DetailsScreen({ navigation, route }: any) {
  const { weather } = route.params;
  return (
    <SafeAreaView className="flex-1 bg-sky-500">
      <View className="flex-1 px-6">
        <View className="flex-row items-center mt-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>

          <Text className="text-white text-2xl font-bold ml-4">
            Detalhes do clima
          </Text>
        </View>

        <View className="items-center mt-10">
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${weather.icon}@4x.png`,
            }}
            className="w-40 h-40"
          />

          <Text className="text-white text-4xl font-bold">{weather.city}</Text>

          <Text className="text-sky-100 text-lg mt-1">{weather.country}</Text>

          <Text className="text-white text-7xl font-extrabold mt-2">
            {Math.round(weather.temperature)}°
          </Text>

          <Text className="text-white text-xl capitalize mt-3">
            {weather.description}
          </Text>
        </View>

        <View className="bg-white rounded-3xl mt-10 p-6">
          <View className="flex-row justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="thermometer-outline" size={20} color="#0284c7" />
              <Text className="text-gray-500 ml-2">Sensação Termica</Text>
            </View>

            <Text className="font-bold">{Math.round(weather.feelsLike)}°</Text>
          </View>

          <View className="flex-row justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="water-outline" size={20} color="#0284c7" />
              <Text className="text-gray-500 ml-2">Humidade</Text>
            </View>

            <Text className="font-bold">{weather.humidity}%</Text>
          </View>

          <View className="flex-row justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="speedometer-outline" size={20} color="#0284c7" />
              <Text className="text-gray-500 ml-2">Vento</Text>
            </View>

            <Text className="font-bold">{weather.windSpeed} m/s</Text>
          </View>

          <View className="flex-row justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="analytics-outline" size={20} color="#0284c7" />
              <Text className="text-gray-500 ml-2">Pressão</Text>
            </View>

            <Text className="font-bold">{weather.pressure} hPa</Text>
          </View>

        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Forecast")}
          className="bg-blue-900 rounded-2xl py-4 mt-8 flex-row justify-center items-center"
        >
          <Ionicons name="calendar-outline" size={22} color="white" />

          <Text className="text-white text-lg font-bold ml-2">
            Próximos dias
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
