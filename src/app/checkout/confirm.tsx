import { Text, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import CustomButton from "../../components/CustomButton";

export default function ConfirmForm() {
  const onNext = () => {
    // validate form

    // submit the data
    // redirect next
    router.dismissAll();
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>Confirm form submission</Text>

      <CustomButton title="Submit" onPress={onNext} style={styles.button} />
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
