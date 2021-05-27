import React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";

const Stack = createStackNavigator();

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
};

const navHeaderOptionsMainScreen = {
  headerTitle: "Main screen",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take photo"
        iconName="ios-camera"
        onPress={() => console.log("PRESS PHOTO")}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="header menu"
        iconName="ios-menu"
        onPress={() => console.log("PRESS MENU")}
      />
    </HeaderButtons>
  ),
};

const navHeaderOptionsPostScreen = ({ route }) => {
  const date = new Date(route.params.date).toLocaleDateString();
  const iconName = route.params.booked ? "ios-star" : "ios-star-outline";

  return {
    headerTitle: `Post at ${date}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="bookmark star"
          iconName={iconName}
          onPress={() => console.log("PRESS MENU")}
        />
      </HeaderButtons>
    ),
  };
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={navHeaderOptionsMainScreen}
        />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={navHeaderOptionsPostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
