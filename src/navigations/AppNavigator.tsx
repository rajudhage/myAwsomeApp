import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import ProductSearch from '../screens/ProductSearch';
import ProductDetails from '../screens/ProductDetails'
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator >

            {/* Screens WITH tabs */}
            <Stack.Screen name="Tabs" component={BottomTabs} options={{ header: (props) => <Header {...props} /> }} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ header: (props) => <Header {...props} showBack={true} /> }} />

            {/* Screens WITHOUT tabs */}
            <Stack.Screen name="ProductSearch" component={ProductSearch} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
};

export default AppNavigator;
