import React, { useRef } from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  StyleSheet,
  Animated,
} from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { SharedElement } from 'react-navigation-shared-element';
// imp screens
import UserCard from "./UserCard";
// imp data photography
import photography from "./photography";
import MasonryList from "./MasonryList";
import PhotographyItemDetail from "./photographyItemDetail";
import { Height, SPACING, Width } from "../configTheme";

const PhotographyList = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      <StatusBar hidden />

      {/* // Show List Image  */}
      <FlatList
        data={photography}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } },
        ])}
        renderItem={({ item }) => {
          console.log('it',item.key)
          return (
            <View style={{ flex: 1, width: Width, height: Height }}>
              <SharedElement id={`item.${item.key}.imageTran`}>
                <Image
                  source={{ uri: item.image }}
                  style={[
                    StyleSheet.absoluteFill,
                    { width: Width, height: Height, resizeMode: "cover" },
                  ]}
                />
              </SharedElement>
              {/* // Show User Card  */}
              <View style={{ position: "absolute", bottom: 120, left: "5%" }}>
                <TouchableScale
                  activeScale={0.7}
                  tension={20}
                  friction={7}
                  useNativeDriver
                  onPress={() => {
                    navigation.navigate("PhotographyListDetail", { data:item });
                  }}
                >
                  <SharedElement id={`item.${parseInt( item.key)}.card`}>
                    <UserCard user={item.user} />
                  </SharedElement>
                </TouchableScale>
              </View>
              {/* // Show User Card  */}
              {/* <MasonryList/> */}
            </View>
          );
        }}
      />
      {/* // Show List Image  */}

      {/* // Show Photograph Item Detail */}

      <PhotographyItemDetail
        scrollX={scrollX}
        data={photography}
        style={{ width: Width * 0.84, top: SPACING * 15, alignSelf: "center" }}
      />

      {/* // Show Photograph Item Detail */}
    </View>
  );
};

export default PhotographyList;
