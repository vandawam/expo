import { StyleSheet, View, Pressable, Text,BackHandler } from 'react-native';
import { A, Pre } from '@expo/html-elements';

export default function Button({ label, url}) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={()=> BackHandler}>
      <A style={styles.A} href={url}>{label}</A>
        </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 35,
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
    verticalAlign: 'top',
  },
  A:{
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flex: 4,
  }
});
