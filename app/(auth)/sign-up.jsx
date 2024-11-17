import { ScrollView, View, Text, Image } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";

import { InputField, CustomButton } from "../../components";
import { images, icons } from "../../constant";

export default function AuthSignUp() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignupPress() {}

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-64">
                    <Image
                        source={images.signUpCar}
                        className="z-0 w-full h-64"
                    />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Create Your Account
                    </Text>
                </View>

                <View className="p-5">
                    <InputField
                        label="Name"
                        placeholder="Enter your name"
                        icon={icons.person}
                        value={name}
                        onChangeText={(value) => setName(value)}
                    />
                    <InputField
                        label="Email"
                        placeholder="Enter your email"
                        icon={icons.email}
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                    <InputField
                        secureTextEntry
                        label="Password"
                        placeholder="Enter password"
                        icon={icons.lock}
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                    />

                    <CustomButton
                        className="mt-6"
                        title="Sign Up"
                        onPress={handleSignupPress}
                    />

                    <Link
                        href="/sign-in"
                        className="text-lg text-center text-general-200 mt-10"
                    >
                        <Text className="mr-2">Already have an account? </Text>
                        <Text className="text-primary-500">Log In</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    );
}
