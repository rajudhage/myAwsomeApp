import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { loggedOutSuccess } from '../features/auth/authSlice';


const Profile = ({navigator}: any)=>{
    const dispatch = useAppDispatch();
    
    const handleLogout= async ()=>{
        await AsyncStorage.removeItem('token');
        dispatch(loggedOutSuccess());
        // navigator.replace('Login');
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Profile;