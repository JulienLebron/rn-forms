import { Text, View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export default function PaymentDetailsForm() {
  const onNext = () => {
    // validate form

    // redirect next
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <Text>Payment details </Text>

      <CustomButton title="Next" onPress={onNext} style={styles.button} />
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
    marginBottom: 25,
  },
});
