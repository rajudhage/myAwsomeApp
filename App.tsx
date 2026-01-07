import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/navigations/BottomTabs';
import Login from './src/screens/Login';
import AppNavigator from './src/navigations/AppNavigator';
import Header from './src/components/Header';

const Stack = createNativeStackNavigator();
function App() {


  return (
    <NavigationContainer>

      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={AppNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
