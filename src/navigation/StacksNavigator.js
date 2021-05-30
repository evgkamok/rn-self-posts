import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { CreatPostScreen } from "../screens/CreatPostScreen";

const defaultHeaderScreenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
};

const navHeaderOptionsMainScreen = ({ navigation }) => ({
  headerTitle: "Main screen",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take photo"
        iconName="ios-camera"
        onPress={() =>navigation.navigate('CreatePost')}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="header menu"
        iconName="ios-menu"
        onPress={() => navigation.openDrawer()}
      />
    </HeaderButtons>
  ),
});

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
const BookedNavigatorStack = createStackNavigator();
const AboutNavigatorStack = createStackNavigator();
const CreatePostNavigatorStack = createStackNavigator();

export const MainNavigatorStackScreen = () => {
  return (
    <MainNavigatorStack.Navigator screenOptions={defaultHeaderScreenOptions}>
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
    </MainNavigatorStack.Navigator>
  );
};

export const BookedNavigatorStackScreen = () => {
  return (
    <BookedNavigatorStack.Navigator screenOptions={defaultHeaderScreenOptions}>
      <BookedNavigatorStack.Screen
        name="BookedPostsScreen"
        component={BookedScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="header menu"
                iconName="ios-menu"
                onPress={() => navigation.openDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      />
    </BookedNavigatorStack.Navigator>
  );
};

export const AboutNavigatorStackScreen = () => {
  return (
    <AboutNavigatorStack.Navigator screenOptions={defaultHeaderScreenOptions}>
      <AboutNavigatorStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="header menu"
                iconName="ios-menu"
                onPress={() => navigation.openDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      />
    </AboutNavigatorStack.Navigator>
  );
};

export const CreatePostNavigatorStackScreen = () => {
  return (
    <CreatePostNavigatorStack.Navigator screenOptions={defaultHeaderScreenOptions}>
      <CreatePostNavigatorStack.Screen
        name="CreatePost"
        component={CreatPostScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="header menu"
                iconName="ios-menu"
                onPress={() => navigation.openDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      />
    </CreatePostNavigatorStack.Navigator>
  );
};
