import { Text, View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import { useState } from "react";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export default function PersonalDetailsForm() {
  const [fullname, setFullname] = useState("");

  const onNext = () => {
    // validate form
    console.log("Submit: ", fullname);
    // redirect next
    router.push("/checkout/payment");
  };

  return (
    <KeyboardAwareScrollView>
      <CustomTextInput label="Full name" placeholder="Joe do" />
      <CustomTextInput label="Address" placeholder="Address" />

      <View style={{ flexDirection: "row", gap: 5 }}>
        <CustomTextInput
          label="City"
          placeholder="City"
          containerStyle={{ flex: 1 }}
        />
        <CustomTextInput
          label="Post code"
          placeholder="1234"
          containerStyle={{ flex: 1 }}
        />
      </View>

      <CustomTextInput
        label="Phone number"
        placeholder="601234123123"
        inputMode="tel"
      />
      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    padding: 10,
    gap: 5,
  },
  button: {
    marginTop: "auto",
  },
});
