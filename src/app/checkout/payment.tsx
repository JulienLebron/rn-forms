import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomTextInput from "../../components/CustomTextInput";
import * as z from "zod";
import {
  PaymentInfo,
  PaymentInfoSchema,
  useCheckoutForm,
} from "../../contexts/CheckoutFormProvider";

export default function PaymentDetailsForm() {
  const { setPaymentInfo, paymentInfo } = useCheckoutForm();

  const form = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
    defaultValues: paymentInfo,
  });

  const onNext: SubmitHandler<PaymentInfo> = (data) => {
    // validate form
    setPaymentInfo(data);
    // redirect next
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="cardNumber"
          label="Card number"
          placeholder="1234 5678 9012 3456"
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="expireDate"
            label="Expires"
            placeholder="01/30"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="cvv"
            label="CVV"
            placeholder="123"
            containerStyle={{ flex: 1 }}
          />
        </View>

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
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: "auto",
  },
});
