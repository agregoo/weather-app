import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { getWeather } from "../services/weatherApi";

export default function HomeScreen({ navigation }: any) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Digite o nome de uma cidade.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);

      setWeather(data);
    } catch (error) {
      setError("Não foi possível buscar o clima.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-sky-500">
      <View className="flex-1 px-6">
        <View className="items-center mt-10">
          <Feather name="sun" size={70} color="white" />

          <Text className="text-white text-4xl font-bold mt-4">
            Weather App
          </Text>

          <Text className="text-sky-100 mt-2">
            Consulte o clima de qualquer cidade
          </Text>
        </View>
        <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 mt-12">
          <Feather name="search" size={22} color="#6B7280" />

          <TextInput
            placeholder="Digite uma cidade..."
            className="flex-1 ml-3 text-lg"
            value={city}
            onChangeText={setCity}
          />
        </View>
        {error ? (
          <Text className="text-red-200 mt-3 text-center">{error}</Text>
        ) : null}
        <Pressable
          onPress={handleSearch}
          disabled={loading}
          className="bg-blue-900 mt-5 rounded-2xl py-4 flex-row justify-center items-center"
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <>
              <Ionicons name="search" size={20} color="white" />

              <Text className="text-white text-lg font-bold ml-2">
                Buscar Clima
              </Text>
            </>
          )}
        </Pressable>
        <View className="bg-white rounded-3xl p-6 mt-10">
          <Text className="text-2xl font-bold text-center">
            {weather?.city ?? "cidade"}
          </Text>

          {weather && (
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
              }}
              className="w-28 h-28 self-center"
            />
          )}

          <Text className="text-6xl font-bold text-center mt-4">
            {weather ? `${Math.round(weather.temperature)}°` : "--°"}
          </Text>

          <Text className="text-center text-gray-500 mt-3 text-lg">
            {weather?.description ?? "Nenhuma informação"}
          </Text>
        </View>
        <TouchableOpacity
          disabled={!weather}
          onPress={() =>
            navigation.navigate("Details", {
              weather,
            })
          }
          className={`rounded-2xl py-4 mt-8 items-center ${
            weather ? "bg-white" : "bg-gray-300"
          }`}
        >
          <Text
            className={`text-lg font-bold ${
              weather ? "text-sky-600" : "text-gray-500"
            }`}
          >
            Ver detalhes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
