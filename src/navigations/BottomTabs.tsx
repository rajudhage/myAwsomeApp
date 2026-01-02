import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Cart from "../screens/Cart";
import You from "../screens/Profile";
import Home from "../screens/Home";
import Header from "../components/Header";


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: '#65cbda',
                tabBarInactiveTintColor: '#aaa',
                tabBarStyle: { height: 80},
            }}>
            <Tab.Screen name="Home" options={{ header: () => <Header />, tabBarIcon: ({ color, size }) => (<Icon name="home" color={color} size={size} />) }} component={Home} />
            <Tab.Screen name="You" options={{ header: () => <Header />, tabBarIcon: ({ color, size }) => (<Icon name="account" color={color} size={size} />) }} component={You} />
            <Tab.Screen name="Cart" options={{ header: () => <Header />, tabBarIcon: ({ color, size }) => (<Icon name="cart" color={color} size={size} />) }} component={Cart} />
        </Tab.Navigator>
    )
}

export default BottomTabs;