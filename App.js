import { StyleSheet, Text, View} from 'react-native';
import Image from './components/ImageViewer';
import Button from './components/Button';
import Button2 from './components/Button2';


const profile = {
  nama : 'Irvan Dawam Multazam',
  kelas : 'XI RPL B',
  no : '10',
  foto : require('./assets/images/profil.png')
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image imgsource={profile.foto}/>
        <Text style={styles.text}> {profile.nama}</Text>
            <Text style={styles.text}> {profile.kelas}</Text>
            <Text style={styles.text}> {profile.no}</Text>
      </View>
        <View style={styles.footerContainer}>
          <Button style={{flex: 1}} label={'Exit'} />
          <Button2 style={{flex:1/3}} label={'My Instagram'} url={"https://instagram.com/irpandm_"}/>
        </View>
        
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text:{
    color: 'white',
  },
  A:{
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flex: 4,
  }
})