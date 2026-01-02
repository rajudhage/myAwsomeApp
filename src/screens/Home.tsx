import { Text, View, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors, typography } from '../contants/theme';
import ActionCard from '../components/ActionCard';
import { useFetch } from '../hooks/useFetch';
import { useCallback, useMemo } from 'react';
import DynamicCardGroup from '../components/DynamicCardGroup';

const Home = () => {
    
    const randomColor = () => {
        const r = Math.floor(150 + Math.random() * 205);
        const g = Math.floor(150 + Math.random() * 205);
        const b = Math.floor(150 + Math.random() * 205);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const url = 'https://dummyjson.com/products/category/smartphones';
    const groupUrl = 'https://dummyjson.com/products?limit=4&select=title,price,discountPercentage,thumbnail';

    const urls = useMemo(() => [url, groupUrl], []);
    const { data, loading, error } = useFetch(urls);

    const renderItem = useCallback(({ item }: any) => {
        return (
            <ActionCard
                name={item.title}
                price={item.price}
                discount={item.discountPercentage}
                color={randomColor()}
                thumbnail={item.thumbnail}
                rating={item.rating}
            />
        );
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <Text style={typography.h1}>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text style={typography.h1}>Error fetching data</Text>
            </View>
        );
    }

    const cardGroup = data[1].products.map((item: any) => ({
        title: item.title,
        description: item.description,
        price: item.price,
        discount: item.discountPercentage,
        image: item.thumbnail,
    }));

    // Home page sections (vertical list)
    const sections = [
        { id: "slider" },
        { id: "deals" }
    ];

    // Render each section
    const renderSection = ({ item }: any) => {
        switch (item.id) {

            case "slider":
                return (
                    <View style={styles.cardContainer}>
                        <FlatList
                            data={data[0].products}
                            horizontal
                            keyExtractor={(item) => item.id.toString()}
                            showsHorizontalScrollIndicator={false}
                            renderItem={renderItem}
                        />
                    </View>
                );

            case "deals":
                return (
                    <View style={styles.cardGroupContainer}>
                        <Text style={styles.text}>Deals for you</Text>
                        <DynamicCardGroup
                            title="Best Products"
                            cards={cardGroup}
                        />
                    </View>
                );

            default:
                return null;
        }
    };

    return (
        <FlatList
            data={sections}
            keyExtractor={(item) => item.id}
            renderItem={renderSection}
            contentContainerStyle={{ paddingBottom: 50 }}
        />
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        marginTop: 20,
        height: 400
    },
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    cardGroupContainer: {
        marginTop: 20,
        paddingBottom: 20,
        backgroundColor: colors.white
    },
    text: {
        fontSize: typography.h3.fontSize,
        fontWeight: typography.h3.fontWeight,
        marginLeft: 15,
        marginBottom: 10
    }
});

export default Home;
