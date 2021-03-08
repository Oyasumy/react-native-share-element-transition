import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Width } from "../configTheme";

const PhotographyItemDetail = ({ data, style, scrollX }) => {
  return (
    <>
      {data.map((item, index) => {
        const inputRange = [
          (index - 0.5) * Width,
          index * Width,
          (index + 0.5) * Width,
        ];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: [20, 0, 20],
        });
        return (
          <Animated.View
            key={`detail.${item.key}`}
            style={[
              { position: "absolute", opacity, transform: [{ translateY }]
               },
              style,
            ]}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </Animated.View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    //   backgroundColor:'#fff',
    // width: Width * 0.9,
    // height: Width / 3,
    // marginLeft: "5%",
    // marginTop: Width / 6,
    position: "absolute",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 22,
    color: "#fff",
  },
  description: {
    color: "#fff",
    opacity: 0.6,
    textAlign: "left",
  },
});
export default PhotographyItemDetail;
