import React, { useEffect, useRef } from "react";
import { View, Text, Image } from "react-native";
// imp Package
import Masonry from "react-native-masonry-layout";
import { SPACING, Width } from "../configTheme";
import { photographyImages } from "./photography";

const MasonryList = () => {
  const ref = useRef();
  const numREf=useRef(0);
  useEffect(() => {
    // ref.masonry.clear();
    if (ref?.current) {
      if (numREf.current<30) {
        const items = photographyImages.map((image, index) => {
          numREf.current++;
          // console.log("nn",numREf.current);
          return {
            height: Width * Math.max(0, Math.random()) + Width / 4,
            image,
            key:String( numREf.current),
          };
        });
        ref.current.addItems(items);
      }
      //   ref.current
    }
    // console.log(ref.current.itemQueue.length);
    // console.log("ok");
  }, []);
  return (
    <Masonry
      ref={ref}
      columns={2}
      style={{ flex: 1, width: Width }}
      contentContainerStyle={{ padding: 5, paddingBottom: 40 }}
      renderItem={(item) => {
        return (
          <View
            style={{
              margin: SPACING / 2,
              backgroundColor: "#fff",
              borderRadius: 0,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: Width/2, height: item.height }}
            />
          </View>
        );
      }}
    />
  );
};

export default MasonryList;
