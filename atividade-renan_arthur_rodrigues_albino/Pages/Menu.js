import { Text, View, StyleSheet, Button} from 'react-native';

export default function Home({navigation}){
  return(
    <View style={estilos.janela}>
      <Button title="Ir para Galeria" onPress={()=>navigation.navigate('Galeria')}/>
    </View>
  );
}

const estilos = StyleSheet.create({
  janela:{
    flex:1,
    backgroundColor:'green'
  }
});