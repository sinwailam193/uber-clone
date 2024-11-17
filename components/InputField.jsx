import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    View,
    Text,
    Image,
    TextInput,
    Platform,
    Keyboard,
} from "react-native";
import clsx from "clsx";

import { OS_SYSTEM } from "../constant";

export default function InputField({
    labelStyle,
    containerStyle,
    inputStyle,
    iconStyle,
    label,
    className,
    secureTextEntry = false,
    icon,
    ...props
}) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === OS_SYSTEM.ios ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="my-2 w-full">
                    <Text
                        className={clsx(
                            "text-lg font-JakartaSemiBold mb-3",
                            !!labelStyle && labelStyle
                        )}
                    >
                        {label}
                    </Text>
                    <View
                        className={clsx(
                            "flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500",
                            !!containerStyle && containerStyle
                        )}
                    >
                        {icon && (
                            <Image
                                source={icon}
                                className={clsx(
                                    "w-6 h-6 ml-4",
                                    !!iconStyle && iconStyle
                                )}
                            />
                        )}
                        <TextInput
                            className={clsx(
                                "rounded-full p-4 font-JakartaSemiBold text-base flex-1 text-left",
                                !!inputStyle && inputStyle
                            )}
                            secureTextEntry={secureTextEntry}
                            {...props}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
