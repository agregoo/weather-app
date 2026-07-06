import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const forecast = [
  {
    id: "1",
    day: "Segunda",
    temp: "27°",
    icon: "sun",
  },
  {
    id: "2",
    day: "Terça",
    temp: "22°",
    icon: "cloud-rain",
  },
  {
    id: "3",
    day: "Quarta",
    temp: "24°",
    icon: "cloud",
  },
  {
    id: "4",
    day: "Quinta",
    temp: "20°",
    icon: "cloud-lightning",
  },
  {
    id: "5",
    day: "Sexta",
    temp: "28°",
    icon: "sun",
  },
];

export default function ForecastScreen({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-sky-500">
      <View className="flex-row items-center px-5 py-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="white" />
        </TouchableOpacity>

        <Text className="text-white text-2xl font-bold ml-4">Previsão</Text>
      </View>

      <View className="items-center mt-2">
        <Text className="text-white text-4xl font-bold">Luanda</Text>

        <Text className="text-white text-lg mt-2">Próximos 5 dias</Text>
      </View>

      <FlatList
        data={forecast}
        keyExtractor={(item) => item.id}
        className="mt-8 px-5"
        renderItem={({ item }) => (
          <View className="bg-white rounded-2xl p-5 mb-4 flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Feather name={item.icon as any} size={28} color="#0EA5E9" />

              <Text className="text-xl ml-4 font-semibold">{item.day}</Text>
            </View>

            <Text className="text-2xl font-bold">{item.temp}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
