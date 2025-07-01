import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PersonalInfo,
  PersonalInfoSchema,
  useCheckoutForm,
} from "../../contexts/CheckoutFormProvider";
import RNPickerSelect from "react-native-picker-select";
import countries from "../../../assets/countries.json";
import CustomPicker from "../../components/CustomPicker";
import CustomDateTimePicker from "../../components/CustomDateTimePicker";

export default function PersonalDetailsForm() {
  const { setPersonalInfo, personalInfo } = useCheckoutForm();
  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: personalInfo,
  });

  const onNext: SubmitHandler<PersonalInfo> = (data) => {
    // validate form
    setPersonalInfo(data);
    // redirect next
    router.push("/checkout/payment");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="fullName"
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
            name="postcode"
            label="Post code"
            placeholder="1234"
            containerStyle={{ flex: 1 }}
          />
        </View>

        <CustomPicker
          name="country"
          placeholder={{ label: "Select country" }}
          items={countries.map((country) => ({
            label: country.name,
            value: country.code,
          }))}
        />

        <CustomTextInput
          name="phone"
          label="Phone number"
          placeholder="601234123123"
          inputMode="tel"
        />
        <CustomDateTimePicker name="birthdate" />
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
