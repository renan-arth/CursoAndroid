import {View, Text,StyleSheet, Button, TextInput} from 'react-native';

export default function Login({navigation}){
  return(
      <View style={estilos.janela}>
    <View style={estilos.item_login}>

      <Text style={estilos.titulo}>Login</Text>
      
      <TextInput id='usuario' style={estilos.textCampo} placeholder='Usuario'></TextInput>
      <TextInput id='senha' style={estilos.textCampo} placeholder='Senha'></TextInput>
      <View style={estilos.buttonLogin}>
        <Button title="Logar" onPress={()=>navigation.navigate('Menu')}/>
      </View>
    </View>
  </View>
  );
}

const estilos = StyleSheet.create({
  janela:{
    flex: 1,
    background: '#256af5'
  },
  item_login:{
    margin: '25px',
    backgroundColor: 'white',
    width: '85%',
    height: '300px',
    borderRadius:5
  },
  titulo:{
    marginTop:20,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: '40px'
  },
  textCampo:{
    height: 40,
    margin: 12,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10
  },
  buttonLogin:{
    marginTop:15,
    margin: 43,
    width: 200
  },
})