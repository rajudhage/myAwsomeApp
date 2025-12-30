import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { colors, typography } from '../contants/theme';

const Home = ({ navigation, route }: any) => {
    const { username, password } = route?.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Text style={styles.text}>Username: {username}</Text>
            <Text style={styles.text}>Password: {password}</Text>
            <View style={styles.button}>
                <Button mode="contained" onPress={() => navigation.navigate('About')}>
                    Go to About
                </Button>
                <Button mode="contained" onPress={() => navigation.navigate('Contact')}>
                    Go to Contact
                </Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    button:{
        marginTop:20,
        width:'60%',
        justifyContent:'space-between',
        backgroundColor:colors.secondary,
        padding:10,
        borderRadius:5,
        gap:10
    },
    text:{
        fontSize: typography.h1.fontSize,
        fontWeight: typography.h1.fontWeight
    }
});
export default Home;