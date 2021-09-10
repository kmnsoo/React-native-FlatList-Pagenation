// ./navigation/DrawerNavigator.js

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#e91e63",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator  screenOptions={screenOptionStyle} >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;