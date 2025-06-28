import { Text, View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

export default function PaymentDetailsForm() {
  const onNext = () => {
    // validate form

    // redirect next
    router.push("/checkout/confirm");
  };

  return (
    <View style={styles.container}>
      <Text>Payment details </Text>

      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </View>
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
