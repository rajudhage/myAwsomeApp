import { useState, useEffect, useMemo } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../contants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFetch } from '../hooks/useFetch';
import { useDebounce } from '../hooks/useDebounce';

interface HeaderProps {
    navigation?: any;
    showBack?: boolean;
}

const Header = ({ navigation, showBack }: HeaderProps) => {
   
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                {showBack && (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <Icon name="arrow-left" size={26} color="#010101ff" />
                    </TouchableOpacity>
                )}
                <TouchableOpacity
                    style={styles.searchFake}
                    onPress={() => navigation.navigate('ProductSearch')}
                >
                    <Icon name="magnify" size={20} color="#555" />
                    <Text style={styles.placeholder}>Search Amazon.in</Text>
                    <Icon name="microphone" size={20} color={"#555"} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: colors.primary,
        height: 120,
    },
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: colors.primary,
    },
    backButton: {
        marginRight: 10,
        padding: 4,
        marginTop: 4,
    },
    input: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        height: 42,
    },
    searchFake: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 50,
        width:350
    },
    placeholder: {
        marginLeft: 8,
        color: '#555',
    },
});

export default Header;
