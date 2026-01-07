import { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DynamicCard from './DynamicCard';

interface DynamicCardGroupProps{
    title?: string,
    cards?: Array<{
        title?: string,
        description?: string,
        discount?: number,
        price?: number,
        image?: string
        id?: number
    }>
    navigation?: any
}
const DynamicCardGroup = ({ title, cards, navigation

}: DynamicCardGroupProps) => {

    return(
        <View style={styles.container}>
            {cards && cards.map((card, index) => (
                <DynamicCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    discount={card.discount}
                    price={card.price}
                    image={card.image}
                    id={card.id}
                    navigation={navigation}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 10,
        paddingHorizontal: 10,
        gap: 10
        
    }
})
export default DynamicCardGroup;