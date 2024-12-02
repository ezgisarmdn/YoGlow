import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const BlogItem = ({ result }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: result.image }} style={styles.image} />
        <View style={styles.rightContent}>
          <Text style={styles.date}>
            {new Date(result.date).toLocaleDateString()}
          </Text>
          <Text style={styles.title}>{result.name}</Text>
          <Text style={styles.text}>{result.explanation}</Text>
          <View style={styles.viewContent}>
            <MaterialCommunityIcons name="eye" size={17} color="#6D5D6E" />
            <Text style={styles.views}>{result.view}</Text>
          </View>
          <View style={styles.bookmarked}>
            {result.isRecorded 
            ? 
            <FontAwesome name="bookmark" size={17} color="#393646" /> 
            : 
            <FontAwesome name="bookmark-o" size={17} color="#393646" />}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10,
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    flexDirection: "row",
  },
  rightContent: {
    marginLeft: 10,
    flex: 1,
  },
  bottomContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 1,
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 10,
    alignSelf: "center",
  },
  title: {
    color: '#393646',
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginVertical: 5,
  },
  date: {
    fontSize: 11,
    fontWeight: '500',
    color: "#B7B7B7",
  },
  text: {
    color: '#393646',
    fontSize: 14,
    marginBottom: 20,
  },
  viewContent: {
    flexDirection: 'row',     
    position: "absolute",
    bottom: 1,
  },
  views: {
    fontSize: 11,
    color: "#6D5D6E",
    alignSelf: 'center',
    marginLeft: 4
  },
  bookmarked: {
    fontSize: 12,
    color: "gray",
    position: "absolute",
    bottom: 1,
    right: 15,
  },
});

export default BlogItem;
