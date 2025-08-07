import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function NewPage() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="profile">
      <Text>Profile</Text>
    </View>
  );
}
