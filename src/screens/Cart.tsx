import {Text, View,StyleSheet} from 'react-native';

const Contact = () => {
    return (
        <View style={styles.container}><Text>Contact</Text></View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Contact;