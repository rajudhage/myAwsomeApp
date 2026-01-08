import { Text, View, Button, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { colors } from '../contants/theme';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from '../hooks/useAppDispatch';
import { loggedInSuccess } from '../features/auth/authSlice';


const Login = ({ navigation }: { navigation: any }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert('Required fields');
            return
        }
        await AsyncStorage.setItem("token", "dummy-token-123");
        dispatch(loggedInSuccess());
        //navigation.replace("Main");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <TextInput
                style={styles.input}
                label="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <View style={styles.button}>
                <Button
                    title="Login"
                    onPress={handleLogin}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: colors.primary
    },
    text: {
        fontSize: 24,
        alignSelf: 'center',
        marginBottom: 20
    },
    input: {
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.secondary,
        width: 'auto',
        marginHorizontal: 20,
        marginTop: 20
    }
})

export default Login