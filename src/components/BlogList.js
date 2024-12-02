import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BlogItem from "./BlogItem";

const BlogList = ({ data }) => {
  const navigation = useNavigation();

  //If results data is not exist don't show anything at all
  if (!data.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("BlogDetail")}>
              <BlogItem result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BlogList;
