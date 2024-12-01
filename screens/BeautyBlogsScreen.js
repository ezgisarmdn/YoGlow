import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import SearchBar from "../components/SearchBar";


const BeautyBlogsScreen = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
        <SearchBar/>
        <View style={styles.categoryStyle}>
            <TouchableOpacity>
                <Text>Populer</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text>Trending</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text>Recent</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    categoryStyle: {
        flexDirection: 'row'
    }
});

export default BeautyBlogsScreen;
