import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, StyleSheet, Image, Button, Text } from "react-native";
import { THEME } from "../theme";

export const PhotoPicker = ( {navigation, image, setImageUri} ) => {

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const { status } =
  //         // await ImagePicker.requestMediaLibraryPermissionsAsync();
  //         await ImagePicker.requestCameraPermissionsAsync();
  //       if (status !== "granted") {
  //         Alert.alert(
  //           "Sorry, we need camera roll permissions to make this work!"
  //         );
  //       }
  //     }
  //   })();
  // }, []);

  const imageType = {
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: false,
    aspect: [16, 9],
    quality: 0.7,
  }

  const selectPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync(imageType);

    if (!result.cancelled) {
      setImageUri(result.uri)
    }
  }

  const makePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync(imageType);

    if (!result.cancelled) {
      setImageUri(result.uri)
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.buttons}>
        <Button title="Make photo" color={THEME.MAIN_COLOR} onPress={makePhoto} />
        <Text style={styles.title}>Create new post</Text>
        <Button title="Select photo" color={THEME.MAIN_COLOR} onPress={selectPhoto} />
      </View>
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "open-regular",
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }
});
