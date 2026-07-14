import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  RefreshControl,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { getForecast } from "../services/weatherApi";
import { ForecastItem } from "../types/ weather";

export default function ForecastScreen({ navigation, route }: any) {
  const { city } = route.params;

  const [forecast, setForecast] = useState<ForecastItem[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadForecast();
  }, []);

  const loadForecast = async () => {
    try {
      setLoading(true);

      const data = await getForecast(city);

      setForecast(data);
    } catch {
      setError("Erro ao carregar previsão.");
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    try {
      setRefreshing(true);

      await loadForecast();
    } finally {
      setRefreshing(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0284c7" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  const dailyForecast = forecast.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("pt-PT", {
      weekday: "long",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-sky-500">
      <View className="flex-row items-center justify-between px-5 py-4">

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="flex-row items-center"
        >
          <Feather name="arrow-left" size={28} color="white" />

          <Text className="text-white text-2xl font-bold ml-3">Previsão</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="flex-row items-center"
        >
          <Feather name="home" size={24} color="white" />

          <Text className="text-white ml-2 font-semibold">Home</Text>
        </TouchableOpacity>
      </View>

      <View className="items-center mt-2">
        <Text className="text-white text-4xl font-bold">{city}</Text>

        <Text className="text-white text-lg mt-2">Próximos 5 dias</Text>
      </View>

      <FlatList<ForecastItem>
        data={dailyForecast}
        keyExtractor={(item) => item.dt_txt}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        className="mt-8 px-5"
        renderItem={({ item }) => (
          <View className="bg-white rounded-2xl p-5 mb-4 flex-row justify-between items-center">
            {/* Lado esquerdo */}
            <View className="flex-row items-center">
              <Image
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                }}
                className="w-16 h-16"
              />

              <View className="ml-3">
                <Text className="text-lg font-semibold capitalize text-gray-600">
                  {item.weather[0].description}
                </Text>

                <Text className="text-gray-500">{formatDate(item.dt_txt)}</Text>
              </View>
            </View>

            <Text className="text-4xl text-sky-600">
              {Math.round(item.main.temp)}°
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
