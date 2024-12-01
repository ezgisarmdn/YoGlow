import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const BlogCard = ({result}) => {

    console.log(result);
    return (
        <View>
            <Text>
                BlogCard
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
      },
      image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
      },
      date: {
        fontSize: 14,
        color: 'gray',
      },
      text: {
        fontSize: 16,
        marginVertical: 5,
      },
      category: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue',
      },
      views: {
        fontSize: 12,
        color: 'gray',
      },
      recorded: {
        fontSize: 12,
        color: 'gray',
      },
});

export default BlogCard;