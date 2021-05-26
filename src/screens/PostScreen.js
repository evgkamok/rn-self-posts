import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { DATA } from "../data";
import { THEME } from "../theme";

export const PostScreen = ({ route, navigation }) => {
  const { postId } = route.params;
  const post = DATA.find((post) => post.id === postId);

  const removePostHandler = () => {
    Alert.alert(
      "Delete post",
      "You sure want delete this post ?",
      [
        {
          text: "No",
          onPress: () => console.log("No Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => console.log("Yes Pressed"), style: "destructive"}
      ],
      {cancelable: true}
    );
  }

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.img} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button title={"Delete post"} color={THEME.DANGER_COLOR} onPress={removePostHandler}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: "open-regular",
  },
});

{
  /* <Button title="Go to MainScreen" onPress={() => navigation.push('PostScreen')}/>
      <Button title="Go to Home" onPress={() => navigation.navigate('MainScreen')} />
      <Button title="Go back" onPress={() => navigation.goBack()} /> */
}
