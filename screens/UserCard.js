import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const UserCard = ({ user, style }) => {
  if (user === undefined) {
    return (
      <View>
        <Text style={{ color: "#fff" }}>Nothing to return</Text>
      </View>
    );
  }
  return (
    <View style={[styles.container, style]}>
      <View style={styles.main}>
        <Image source={{ uri: user.avatar }} style={styles.image} />
        <View>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.userJob}>{user.job}</Text>
        </View>
      </View>
      {/* // info */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 23,
          marginBottom:12
        }}
      >
        {user.detail.map((item,index) => {
          return (
            <View key={index} style={{ alignItems: "center" }}>
              <Text numberOfLines={1} adjustsFontSizeToFit style={styles.label}>{item.value}</Text>
              <Text style={styles.value}>{item.label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    // height: (width - 100) / 2,
    height:'auto',
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  main: {
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 22,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 22,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  userJob: {
    fontSize: 14,
    color: "#000",
    opacity: 0.5,
  },

  label: {
    color: "#000",
    fontWeight: "700",
    fontSize: 19,
  },
  value: {
    color: "#000",
    fontSize: 10,
    opacity: 0.5,
  },
});
export default UserCard;
