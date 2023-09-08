import { StyleSheet, View, Pressable, Text,BackHandler } from 'react-native';
import { A } from '@expo/html-elements';

export default function Button({ label}) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => BackHandler.exitApp()}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
