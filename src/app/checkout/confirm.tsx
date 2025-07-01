import { Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import CustomButton from "../../components/CustomButton";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export default function ConfirmForm() {
  const onNext = () => {
    // validate form

    // submit the data
    // redirect next
    router.dismissAll();
    router.back();
  };

  return (
    <KeyboardAwareScrollView>
      <Text>Confirm form submission</Text>

      <CustomButton title="Submit" onPress={onNext} style={styles.button} />
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
