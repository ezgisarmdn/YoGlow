import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchBar= () => {
    return (
        <View style={styles.backgroundStyle}>
            <Ionicons name="search" style={styles.iconStyle} />
            <TextInput style={styles.textInputStyle} placeholder="Discover your beauty.."/>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#EEEEEE',
        height: 50,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },
    iconStyle: {
        fontSize: 30,
        marginHorizontal: 10,
        alignSelf: 'center',
        color: '#B7B7B7'
    },
    textInputStyle: {
        flex: 1,
        fontSize: 16
    }
});

export default SearchBar;