import {View, Text,StyleSheet, ImageBackground, Image} from 'react-native';

export default function Galeria({navigation}){
  return(
    <View style={styles.container}>
              <View>
                <Image source={require('../img/img1_casamento.jpg')}style={styles.imageForeground}/>
                <Text style={styles.text}>Bolos de Casamentos</Text>
              </View>
              <View>
                <Image source={require('../img/img2_fofo.jpg')}style={styles.imageForeground}/>
                <Text style={styles.text}>Bolos Fofos</Text>
              </View>
              <View>
                <Image source={require('../img/img1.jpg')}style={styles.imageForeground}/>
                <Text style={styles.text}>Bolos de Potes</Text>
              </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00FFFF'
  },
  imageForeground: {
    margin: 5,
    width: 100,
    height: 100
  },
  text: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  },
});
