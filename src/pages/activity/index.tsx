import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function NewPage() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="activity">
      <Text>活动!</Text>
    </View>
  );
}
