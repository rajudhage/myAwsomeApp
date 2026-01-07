import { Text, View, StyleSheet, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useFetch } from '../hooks/useFetch';
import { useMemo, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import RatingStars from '../components/RatingStars';
import { colors } from '../contants/theme';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get("window");

const ProductDetails = () => {
    const route = useRoute<any>();
    const id = route?.params?.id;
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    if (!id) {
        return (
            <View style={styles.container}>
                <Text>No product ID provided</Text>
            </View>
        );
    }

    const url = `https://dummyjson.com/products/${id}`;
    const urls = useMemo(() => [url], [url]);
    const { data, loading, error } = useFetch(urls);

    const product = data?.[0]; // safe access

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error || !product) {
        return (
            <View style={styles.container}>
                <Text>Error fetching product</Text>
            </View>
        );
    }
    const items = Array.from({ length: product.stock }, (_, i) => ({
        label: `${i + 1}`,
        value: i + 1,
    }));
    const sections = [
        {
            id: 'details',
            title: 'Product Details',
        }];

    const renderSection = ({ item }: any) => {
        if (item.id === 'details') {
            return (<View style={styles.container}>
                <View style={styles.ratingContainer}>
                    <Text style={styles.brandLabel}>{product.brand}</Text>
                    <Text style={styles.discountBadge}>{product.discountPercentage}%off</Text>
                    <RatingStars rating={product.rating} review={product.reviews.length} />
                </View>
                <Text>{product.description}</Text>
                <PagerView style={styles.pagerView} initialPage={0}>

                    {product.images.map((img: string, i: number) => (
                        <View key={i}>
                            <Image
                                source={{ uri: img }}
                                style={{ width: width, height: 300 }}
                                resizeMode="cover"
                            />
                        </View>
                    ))}
                </PagerView>
                <View style={styles.viewDivider}></View>
                <View style={styles.priceContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>₹{product.price}</Text>
                    {product.stock > 0 && <Text style={styles.stock}>{product.availabilityStatus}</Text>}
                    <Text>{product.shippingInformation}</Text>
                </View>
                <View style={styles.viewDivider}></View>
                <View>
                    <Text>FREE delivery {product.shippingInformation}</Text>
                    <Text> Deliver to address</Text>
                    {product.stock > 0 && <Text style={styles.stock}>{product.availabilityStatus}</Text>}
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={() => { }}
                        placeholder="Select Quantity"
                        style={{ marginTop: 10 }}
                    />
                    <View style={styles.buttonContainer}>
                        <Button mode="contained" onPress={() => { }} style={styles.addToCartButton}>
                            <Text style={styles.buttontext}>Add to Cart</Text>
                        </Button>
                        <Button mode="contained" onPress={() => { }} style={styles.buyNowButton}>
                            <Text style={styles.buttontext}>Buy Now</Text>
                        </Button>
                    </View>
                    <View style={styles.viewDivider}></View>
                    <View >
                        <Text style={styles.moreInfoTitle}> Shop with confidence</Text>
                        <View style={styles.moreInfoContainer}>
                            <View style={styles.row}>
                                <Icon name="backup-restore" size={20} color={colors.blue} />
                                <Text style={styles.moreInfoItem}>{product.returnPolicy}</Text>
                            </View>
                            <View style={styles.row}>
                                <Icon name="shield-check" size={20} color={colors.blue} />
                                <Text style={styles.moreInfoItem}>{product.warrantyInformation}</Text>
                            </View>
                            <View style={styles.row}>
                                <Icon name="star" size={20} color={colors.blue} />
                                <Text style={styles.moreInfoItem}>Top Brand</Text>
                            </View>
                            <View style={styles.row}>
                                <Icon name="truck-delivery" size={20} color={colors.blue} />
                                <Text style={styles.moreInfoItem}>Free Delivery</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>);
        }
        return null;
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
    container: {
        flex: 1,
        padding: 16
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    pagerView: {
        width: width,
        height: 300,
        marginVertical: 16,
        backgroundColor: '#e4e0e0ff',
        alignSelf: 'center',
    },
    discountBadge: {

        backgroundColor: colors.red,
        padding: 5,
        borderRadius: 5
    },
    brandLabel: {
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: 'Arial',
    },
    priceContainer: {
        padding: 10,
        borderWidth: 2,
        borderColor: colors.blue,
        borderRadius: 10,
        marginTop: 10,
        height: 140,
        width: 150
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 20,
        marginBottom: 10,
    },
    stock: {
        fontSize: 14,
        color: colors.greenLight,
        marginBottom: 10,
    },
    viewDivider: {
        borderWidth: 1,
        borderColor: colors.gray,
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        color: colors.red
    },
    addToCartButton: {
        backgroundColor: colors.buttonPrimary,
        marginTop: 20,
        color: colors.black
    },
    buyNowButton: {
        backgroundColor: colors.buttonSecondary,
        marginTop: 10,
        color: colors.black
    },
    buttontext: {
        color: colors.black
    },
    moreInfoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: 100,
        marginTop: 10,
        justifyContent: 'space-between',
        gap: 10
    },
    moreInfoItem: {
        width: '38%',
        marginBottom: 10,
        color: colors.blue1,
        fontSize: 16
    },
    moreInfoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',     
        gap: 6,
    },
});

export default ProductDetails;
