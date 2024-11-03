import { Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthWelcome() {
    return (
        <SafeAreaView className="h-full flex items-center justify-between bg-white">
            <TouchableOpacity
                className="w-full flex justify-end items-end p-5"
                onPress={() => router.replace("/(auth)/sign-up")}
            >
                <Text className="text-black text-md font-JakartaBold">
                    Skip
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
