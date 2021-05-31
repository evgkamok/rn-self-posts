import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomNavigator } from "./BottomNavigator";
import {
  AboutNavigatorStackScreen,
  CreatePostNavigatorStackScreen,
} from "./StacksNavigator";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen
          name="MainScreen"
          component={BottomNavigator}
          options={{
            drawerLabel: "Main",
            activeTintColor: THEME.DANGER_COLOR
          }}
        />
        <Drawer.Screen
          name="CreatePost"
          component={CreatePostNavigatorStackScreen}
        />
        <Drawer.Screen name="About" component={AboutNavigatorStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
