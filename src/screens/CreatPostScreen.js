import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { createPost } from "../store/reducers/postsReducer";
import { PhotoPicker } from "../components/PhotoPicker";
import { THEME } from "../theme";

export const CreatPostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const createHandler = () => {
    const post = {
      img: imageUri,
      text: textInput,
      date: new Date().toJSON(),
      booked: 0,
    };
    dispatch(createPost(post));
    navigation.navigate("MainScreen");
    setTextInput("");
    setImageUri(null);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <PhotoPicker setImageUri={setImageUri} image={imageUri} />

        <TextInput
          style={styles.textInput}
          value={textInput}
          onChangeText={setTextInput}
          placeholder="Enter text post"
          multiline
        />

        <Button
          title="Create new post"
          color={THEME.MAIN_COLOR}
          onPress={createHandler}
          disabled={!textInput || !imageUri}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },

  textInput: {
    width: "100%",
    height: 100,
    padding: 10,
    marginBottom: 10,
  },
  img: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
});
