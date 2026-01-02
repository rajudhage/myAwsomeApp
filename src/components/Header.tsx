import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import { colors } from '../contants/theme';

const Header = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search Amazon.in"
                left={<TextInput.Icon icon="magnify" />}
                right={<TextInput.Icon icon="microphone" />}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:60,
        justifyContent:'center',
        paddingHorizontal:10,
        backgroundColor: colors.primary,
        borderBottomWidth:1,
        borderColor:'#0b0a0aff',
        marginTop:50
    },
    input:{
        height:45,
        borderWidth:1,
        width:'90%',
        borderColor:'#ccc',
        borderRadius:10,
        paddingHorizontal:10,
        backgroundColor:colors.white
    }
})
export default Header;
