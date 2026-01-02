import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { colors } from '../contants/theme';
import RatingStars from './RatingStars';

interface ActionCardProps {
    name: string,
    price: number,
    color: string,
    thumbnail: string,
    discount?: number,
    rating?: number
}
const ActionCard = ({ name, price, color, thumbnail, discount, rating }: ActionCardProps) => {
    return (
        <TouchableOpacity style={[styles.card, { backgroundColor: color }]}>
            <Text style={styles.cardText}>{name}</Text>
            <View style={styles.rating}><Text style={styles.ratingText}>{rating || 0}</Text><RatingStars rating={rating || 0} /></View>
            <ImageBackground source={{ uri: thumbnail }} style={styles.image} >
                <View style={styles.details}>
                    {discount && <Text style={styles.cardDescription}>{discount}% off</Text>}
                    <Text style={styles.amount}>{price}₹</Text>

                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 10,
        borderRadius: 10,
        width: 250,
    },
    cardText: {
        color: colors.black,
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardDescription: {
        color: '#fff',
        fontSize: 12,
        marginTop: 5,
        backgroundColor: colors.red,
        width: 70,
        padding: 4,
        textAlign: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "flex-end"

    },
    amount: {
        color: colors.black,
        fontSize: 18,
        marginTop: 10,
        fontWeight: '600'
    },
    details: {
        flexDirection: 'row',   
        alignItems: 'center',
        
    },
    rating:{
        flexDirection:'row',
        marginVertical:5,
        alignItems:'center',
        gap:5
    },
    ratingText:{
        fontSize:12,
    }
})

export default ActionCard;