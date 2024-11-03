import { TouchableOpacity, Text } from "react-native";
import clsx from "clsx";

import { getBgVariantStyle, getTextVariantStyle } from "../utils/helper";

export default function CustomButton({
    onPress,
    title,
    IconLeft,
    IconRight,
    bgVariant = "primary",
    textVariant = "default",
    className,
    ...props
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={clsx(
                "w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70",
                getBgVariantStyle(bgVariant),
                !!className && className
            )}
            {...props}
        >
            {IconLeft && <IconLeft />}
            <Text
                className={clsx(
                    "text-lg font-bold",
                    getTextVariantStyle(textVariant)
                )}
            >
                {title}
            </Text>
            {IconRight && <IconRight />}
        </TouchableOpacity>
    );
}
