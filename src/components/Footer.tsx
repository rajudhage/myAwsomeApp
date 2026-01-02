import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

const Footer = ({Navigation}: any) => {
return (
    <View style={styles.container}>
        <Button onPress={()=> Navigation.navigate('Home') }>Home</Button>
        <Button onPress={()=> Navigation.navigate('About') }>About</Button>
        <Button onPress={()=> Navigation.navigate('Contact') }>Contact</Button>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderTopWidth:1,
        borderColor:'#ccc',
        flexDirection:'row',
        gap:20,
        backgroundColor:'#f9f9f9'
    },
    text:{
        fontSize:16,
        color:'#333'
    }
})

export default Footer;  