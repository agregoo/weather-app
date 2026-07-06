import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable, TextInput } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }: any) {
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
          />
        </View>

        <Pressable className="bg-blue-900 mt-5 rounded-2xl py-4 flex-row justify-center items-center">
          <Ionicons name="search" size={20} color="white" />

          <Text className="text-white text-lg font-bold ml-2">
            Buscar Clima
          </Text>
        </Pressable>

        <View className="bg-white rounded-3xl p-6 mt-10">
          <Text className="text-2xl font-bold text-center">Luanda</Text>

          <Text className="text-6xl font-bold text-center mt-4">24°</Text>

          <Text className="text-center text-gray-500 mt-3 text-lg">
            Parcialmente Nublado
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Details")}
          className="bg-white rounded-2xl py-4 mt-8 items-center"
        >
          <Text className="text-sky-600 font-bold text-lg">Ver detalhes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
