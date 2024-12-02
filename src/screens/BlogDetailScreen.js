import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

const BlogDetailScreen = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const isBookmarked = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.blogImage}
          source={{
            uri: "https://i.pinimg.com/736x/db/47/02/db4702a12c4c6508a797e0e70589aacb.jpg",
          }}
        />
        <TouchableOpacity style={styles.iconView} onPress={isBookmarked}>
          {bookmarked ? (
            <FontAwesome name="bookmark" style={styles.bookmarkedIcon} />
          ) : (
            <FontAwesome name="bookmark-o" style={styles.bookmarkedIcon} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.category}>Trending</Text>
        <Text style={styles.date}>Jar 1, 2024 - 2000 views</Text>
      </View>
      <Text style={styles.title}>Best Face Masks for Every Skin Type</Text>
      <View style={styles.rowView}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.authorImage}
            source={{
              uri: "https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/author-brainstorms-idea.jpg",
            }}
          />
          <Text style={styles.authorName}> By: Ezgi Sarimaden</Text>
        </View>
        <TouchableOpacity>
          <Feather name="share" style={styles.shareIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.contentText}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
        eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
        sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
        hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec
        vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
        amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
        sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
        bibendum sodales, augue velit cursus nunc,
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  blogImage: {
    height: 220,
    width: 345,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  iconView: {
    backgroundColor: "#B4B4B8",
    borderRadius: 7,
    position: "absolute",
    right: 40,
    top: 45,
  },
  bookmarkedIcon: {
    fontSize: 22,
    color: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginVertical: 10,
  },
  category: {
    fontSize: 11,
    fontWeight: "600",
    backgroundColor: "#EEEDEB",
    padding: 7,
    borderRadius: 5,
  },
  date: {
    alignSelf: "center",
    fontSize: 12,
    color: "#A9A9A9",
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: '#393646',
    marginHorizontal: 25,
    marginVertical: 10,
  },
  authorImage: {
    height: 25,
    width: 25,
    borderRadius: 3,
  },
  authorName: {
    color: "#A9A9A9",
    alignSelf: "center",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 3,
  },
  shareIcon: {
    fontSize: 15,
    backgroundColor: "#EEEDEB",
    color: "gray",
    borderRadius: 5,
    padding: 5,
  },
  contentText: {
    marginHorizontal: 25,
    marginVertical: 20,
    color: '#393646',
    fontSize: 15
    
  }
});

export default BlogDetailScreen;
