import { useState, useEffect, useMemo, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../contants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFetch } from '../hooks/useFetch';
import { useDebounce } from '../hooks/useDebounce';


const ProductSearch = ({ navigation }: any) => {

    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);

    const url = 'https://dummyjson.com/products/category/smartphones';

    const urls = useMemo(() => [url], [url]);
    const { data, loading, error } = useFetch(urls);

    const products = data[0]?.products || [];

    const [filteredData, setFilteredData] = useState(products);

    useEffect(() => {
        if (!products.length) return;

        if (!debouncedSearch.trim()) {
            setFilteredData(products);
            return;
        }

        const result = products.filter((item: any) =>
            item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        );

        setFilteredData(result);

    }, [products, debouncedSearch]);

    const renderItem = useCallback(({item}: any)=>{
        return (
            <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails', {id:item.id})}>
                <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
        )
    },[])

    if(error) return <Text>{error}</Text>;
    if(loading) return <Text>Loading please wait</Text>

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea} />
            <View style={styles.headerContainer}>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Icon name="arrow-left" size={26} color="#010101ff" />
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    placeholder="Search Amazon.in"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    onChangeText={setSearch}
                    left={<TextInput.Icon icon="magnify" />}
                    right={<TextInput.Icon icon="microphone" />}
                />

            </View>

            <View style={{ flex: 1, marginTop: 10 }}>
                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    safeArea: {
        backgroundColor: colors.primary,
    },
    headerContainer: {
        marginTop: -40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: colors.primary,
    },
    backButton: {
        marginRight: 10,
        padding: 4,
    },
    input: {
        backgroundColor: colors.white,
        borderRadius: 10,
        flex: 1
    },
    itemText: {
        padding: 12,
        fontSize: 16,
        borderBottomWidth: 0.3,
        borderColor: '#ccc',
    },
});

export default ProductSearch;
