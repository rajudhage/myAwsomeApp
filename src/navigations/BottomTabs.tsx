import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cart from "../screens/Cart";
import You from "../screens/Profile";
import Home from "../screens/Home";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeMain" component={Home} options={{header: () => <Header />}}/>
            <HomeStack.Screen name="ProductDetails" component={ProductDetails}/>
        </HomeStack.Navigator>
    )
}

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: '#65cbda',
                tabBarInactiveTintColor: '#aaa',
                tabBarStyle: { height: 80},
            }}>
            <Tab.Screen name="Home" options={{headerShown: false, tabBarIcon: ({ color, size }) => (<Icon name="home" color={color} size={size} />) }} component={HomeStackScreen} />
            <Tab.Screen name="You" options={{ header: () => <Header />, tabBarIcon: ({ color, size }) => (<Icon name="account" color={color} size={size} />) }} component={You} />
            <Tab.Screen name="Cart" options={{ header: () => <Header />, tabBarIcon: ({ color, size }) => (<Icon name="cart" color={color} size={size} />) }} component={Cart} />
        </Tab.Navigator>
    )
}

export default BottomTabs;