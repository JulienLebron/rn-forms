import { ComponentProps } from "react";
import { useController } from "react-hook-form";
import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

type CustomPicker = {
  name: string;
} & Omit<ComponentProps<typeof RNPickerSelect>, "onValueChange">;

export default function CustomPicker({ name, ...pickerProps }: CustomPicker) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController({ name });

  return (
    <View style={{ marginVertical: 4 }}>
      <RNPickerSelect
        {...pickerProps}
        value={value}
        onValueChange={onChange}
        onClose={onBlur}
        style={{
          viewContainer: {
            marginTop: 4,
            marginBottom: 2,
          },
          inputIOS: {
            borderColor: "gainsboro",
            borderWidth: 1,
            width: "100%",
            padding: 10,
            borderRadius: 5,
          },
          inputIOSContainer: {
            pointerEvents: "none",
          },
        }}
      />
      <Text style={{ color: "crimson", height: 17 }} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  );
}
