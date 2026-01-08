import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import AppNavigator from './src/navigations/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppSelector } from './src/hooks/useAppSelector';
import { useAppDispatch } from './src/hooks/useAppDispatch';
import { loggedInSuccess, loggedOutSuccess } from './src/features/auth/authSlice';


const Stack = createNativeStackNavigator();

const App = () => {

  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector(state => state.auth.loggedIn);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) dispatch(loggedInSuccess());
      else dispatch(loggedOutSuccess());
    };

    checkAuth();
  }, []);

  return (
      <NavigationContainer>
        <Stack.Navigator >
          {!loggedIn ? <Stack.Screen name="Login" component={Login} />
            : <Stack.Screen name="Main" component={AppNavigator} options={{ headerShown: false }} />}
        </Stack.Navigator>
      </NavigationContainer>
  );
}



export default App;
