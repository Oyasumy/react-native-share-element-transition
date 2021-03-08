import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image,ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Height, SPACING, Width } from "../configTheme";
import UserCard from "./UserCard";
import MasonryList from "./MasonryList";
import { SharedElement } from 'react-navigation-shared-element';
const PhotographyListDetail = ({ navigation, route }) => {
  const { data } = route.params;
  // console.log(item.key);
  return (
    <View style={styles.container}>
      <SharedElement id={`item.${data.key}.imageTran`}>
        <Image
          source={{ uri: data.image }}
          style={{
            width: Width,
            height: Height / 2 - 100,
            position: "absolute",
            resizeMode: "cover",
          }}
        />
      </SharedElement>

      {/* <MasonryList/> */}
      <Feather
        name="arrow-left"
        size={22}
        color="#000"
        style={styles.iconBack}
        onPress={() => navigation.goBack()}
      />

      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginTop: Width / 2,
            //   backgroundColor: "#000",
          }}
        >
          <SharedElement id={`item.${parseInt( data.key)}.card`}>
            <UserCard user={data.user} />
          </SharedElement>
        </View>
        <MasonryList />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconBack: {
    position: "absolute",
    left: SPACING * 6,
    top: SPACING * 10,
    zIndex: 11,
    // backgroundColor: "#666",
    opacity: 0.7,
  },
});

// PhotographyListDetail.sharedElements = (
//   navigation,
//   otherNavigation,
//   showing
// ) => {
//   const data = navigation.getParam("item");
//   return [
//     {
//       id: `item.${item.key}.image`,
//       animation: "move",
//       resize: "clip",
//       align: "center-top",
//     },
//     {
//       id: `item.${item.key}.card`,
//       animation: "move",
//       resize: "clip",
//       align: "left-center",
//     },
//   ];
// };
export default PhotographyListDetail;
