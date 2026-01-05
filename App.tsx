import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/navigations/BottomTabs';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();
function App() {
 

  return (
    <NavigationContainer>    
      
        <Stack.Navigator >
          <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
