import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { createPost } from "../store/reducers/postsReducer";
import { THEME } from "../theme";

export const CreatPostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const createHandler = () => {
    const post = {
      id: Date.now().toString(),
      img: "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
      text: textInput,
      date: new Date().toJSON(),
      booked: false,
    };
    dispatch(createPost(post));
    setTextInput("");
    navigation.navigate("MainScreen");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Create new post</Text>
        <TextInput
          style={styles.textInput}
          value={textInput}
          onChangeText={setTextInput}
          placeholder="Enter text post"
          multiline
        />
        <Image
          style={styles.img}
          source={{
            uri: "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
          }}
        />
        <Button
          title="Create new post"
          color={THEME.MAIN_COLOR}
          onPress={createHandler}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "open-bold",
  },
  textInput: {
    width: "100%",
    height: 150,
    padding: 10,
    marginBottom: 10,
  },
  img: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
});
