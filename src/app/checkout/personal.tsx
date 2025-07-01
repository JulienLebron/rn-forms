import { Text, View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import { useState } from "react";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from "react-hook-form";

export default function PersonalDetailsForm() {
  const form = useForm();

  console.log("Errors: ", form.formState.errors);

  const onNext: SubmitHandler<any> = (data) => {
    // validate form
    console.log(data);
    // redirect next
    router.push("/checkout/payment");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="fullname"
          label="Full name"
          placeholder="Joe do"
        />
        <CustomTextInput name="address" label="Address" placeholder="Address" />

        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="city"
            label="City"
            placeholder="City"
            containerStyle={{ flex: 1 }}
          />

          <CustomTextInput
            name="postCode"
            label="Post code"
            placeholder="1234"
            containerStyle={{ flex: 1 }}
          />
        </View>
        <CustomTextInput
          name="phoneNumber"
          label="Phone number"
          placeholder="601234123123"
          inputMode="tel"
        />
        <CustomButton
          title="Next"
          onPress={form.handleSubmit(onNext)}
          style={styles.button}
        />
      </FormProvider>
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
