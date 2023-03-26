import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Pages/Index';
import Galeria from './Pages/galeria';
import Menu from './Pages/Menu';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Faça o login" component={Login}/>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Galeria" component={Galeria}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}