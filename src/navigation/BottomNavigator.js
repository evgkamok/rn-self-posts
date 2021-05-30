import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";
import { MainNavigatorStackScreen, BookedNavigatorStackScreen, AboutNavigatorStackScreen} from "./StacksNavigator"


const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export const BottomNavigator = () => {
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
      <Tab.Navigator
        shifting={true}
        barStyle={{
          backgroundColor: THEME.MAIN_COLOR,
        }}
      >
        <Tab.Screen
          name="Main"
          component={MainNavigatorStackScreen}
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
          component={BookedNavigatorStackScreen}
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
  );
};