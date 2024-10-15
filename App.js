import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; // Se importa HomeScreen desde el archivo
import DetailsScreen from './src/screens/DetailsScreen'; // De igual forma se importa DetailsScreen
import InfoScreen from './src/screens/InfoScreen'; // Y InfoScreen

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



