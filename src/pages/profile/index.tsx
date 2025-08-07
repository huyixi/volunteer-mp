import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

import { Avatar } from "@taroify/core";

export default function NewPage() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="profile">
      <Avatar>P</Avatar>
    </View>
  );
}
