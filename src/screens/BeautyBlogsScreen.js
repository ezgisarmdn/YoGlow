import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image} from "react-native";
import SearchBar from "../components/SearchBar";
import BlogCard from "../components/BlogCard";
import mockData from "../data/mockData.json";

const BeautyBlogsScreen = () => {
  const [blogData, setBlogData] = useState([]);

  //State holding the selected category
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  //List of categories
  const values = ["Popular", "Trending", "Recent"];

  useEffect(() => {
    setBlogData(mockData);
  }, []);


  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <SearchBar />
      <View style={styles.categoryStyle}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            //onPress={() => setCategory(value)}
            style={[
              styles.categoryButton,
              selectedCategory === value && styles.selectedCategoryButton, // Seçilen kategoriye özel stil
            ]}
            onPress={() => setSelectedCategory(value)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === value && styles.selectedCategoryText, // Seçilen kategoriye özel metin stili
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={blogData}
        renderItem={({item}) => {
           <BlogCard
              result={item}
           />
      }}
        keyExtractor={(item) => item.name} // Benzersiz bir anahtar kullanın
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 5,
  },
  selectedCategoryButton: {
    backgroundColor: "#FFCFEF", // Seçilen kategori butonunun rengi
  },
  categoryText: {
    color: "#B7B7B7",
    fontSize: 17,
    fontWeight: "bold",
  },
  selectedCategoryText: {
    fontSize: 16,
    color: "#fff",
  },
 
});
export default BeautyBlogsScreen;
