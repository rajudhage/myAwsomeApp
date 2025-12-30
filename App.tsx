import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();
function App() {
 

  return (
    <NavigationContainer>    
      
        <Stack.Navigator >
          <Stack.Screen name="Login" options={{ title: "Welcome back", headerStyle: { backgroundColor: "#4CAF50" }, headerTintColor: "#fff" }} component={Login} />
          <Stack.Screen name="Home" options={{ title: "Welcome Home", headerStyle: { backgroundColor: "#4CAF50" }, headerTintColor: "#fff" }} component={Home} />         
          <Stack.Screen name="About" options={{ title: "About Us", headerStyle: { backgroundColor: "#4CAF50" }, headerTintColor: "#fff" }} component={About} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      
    </NavigationContainer>
  );
}



export default App;
