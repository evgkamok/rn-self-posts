import React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, Text, View, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { Post } from "../components/Post";

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

const MainNavigatorStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainNavigatorStack.Navigator screenOptions={defaultScreenOptions}>
      <MainNavigatorStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={navHeaderOptionsMainScreen}
      />
      <MainNavigatorStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={navHeaderOptionsPostScreen}
      />
      <MainNavigatorStack.Screen
        name="Post"
        component={Post}
      />
    </MainNavigatorStack.Navigator>
  );
};

////////
const BookedNavigatorStack = createStackNavigator();
const BookedNavigator = () => {
  return (
    <BookedNavigatorStack.Navigator screenOptions={defaultScreenOptions}>
      <BookedNavigatorStack.Screen
        name="BookedPostsScreen"
        component={BookedScreen}
        options={{
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="header menu"
                iconName="ios-menu"
                onPress={() => console.log("PRESS MENU")}
              />
            </HeaderButtons>
          ),
        }}
      />
    </BookedNavigatorStack.Navigator>
  );
};
////////

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export const AppNavigator = () => {
  const defineIconColor = (focused) => {
    const devicePlatform = Platform.OS;

    if (devicePlatform === "android") {
      if (focused) {
        return "#fff";
      } else {
        return "gray";
      }
    }

    if (devicePlatform === "ios") {
      if (focused) {
        return THEME.MAIN_COLOR;
      } else {
        return "gray";
      }
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={true}
        barStyle={{
          backgroundColor: THEME.MAIN_COLOR,
        }}
      >
        <Tab.Screen
          name="Main"
          component={MainNavigator}
          options={{
            tabBarLabel: "Posts",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name="ios-albums"
                color={defineIconColor(focused)}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Booked"
          component={BookedNavigator}
          options={{
            tabBarLabel: "Booked",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name="ios-star"
                color={defineIconColor(focused)}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
