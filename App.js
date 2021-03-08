import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


const StackNav = createSharedElementStackNavigator();

// Imp
import PhotographyList from "./screens/photographyList";
import PhotographyListDetail from "./screens/photographyListDetail";

// const StackNav = createStackNavigator();
// const StackNav = createSharedElementStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNav.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={PhotographyList}
      >
        <StackNav.Screen name="PhotographyList" component={PhotographyList} />
        <StackNav.Screen
          name="PhotographyListDetail"
          component={PhotographyListDetail}
          sharedElementsConfig={(route) => {
            const { data } = route.params;
            console.log(data.key);
            return [
              {
                id: `item.${data.key}.imageTran`,
                animation: "move",
                resize: "clip",
                align: "center-top",
              },
              {
                id: `item.${parseInt(data.key)}.card`,
                animation: "move",
                resize: "clip",
                align: "left-center",
              },
            ];
          }}
        />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000",
    // alignItems: 'center',
    // justifyContent: "center",
  },
});
