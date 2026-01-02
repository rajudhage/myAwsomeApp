import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { colors } from '../contants/theme';

interface cardProps {
    title?: string,
    description?: string,
    discount?: number,
    price?: number,
    image?: string
}

const DynamicCard = ({
    title,
    description,
    discount,
    price,
    image
}: cardProps) => {
    return (
        <View style={styles.card}>
            <ImageBackground
                source={{ uri: image }}
                style={styles.image}
            >
                <View style={styles.details}>
                    {discount && <Text style={styles.discount}>{discount}% off</Text>}


                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        width: '48%',
        height: 200,
        backgroundColor: colors.grayLight,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    discount: {
        color: '#fff',
        fontSize: 12,
        marginTop: 5,
        backgroundColor: colors.red,
        width: 70,
        padding: 4,
        textAlign: 'center'
    },
})

export default DynamicCard;