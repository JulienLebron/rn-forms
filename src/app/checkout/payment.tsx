import { Text, View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomTextInput from "../../components/CustomTextInput";
import * as z from "zod";

const PaymentInfoSchema = z.object({
  cardnumber: z
    .string()
    .length(16, { message: "Card number must be 16 digits" }),
  expiredate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Please use the MM/YY format"),
  cvv: z.coerce.number().min(100).max(999),
});

type PaymentInfo = z.infer<typeof PaymentInfoSchema>;

export default function PaymentDetailsForm() {
  const form = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
  });

  const onNext: SubmitHandler<PaymentInfo> = (data) => {
    // validate form
    console.log(data);
    // redirect next
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="cardnumber"
          label="Card number"
          placeholder="1234 5678 9012 3456"
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="expiredate"
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
