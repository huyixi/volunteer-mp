import { View, Text, Image } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button } from "@taroify/core";
import { Swiper } from "@taroify/core";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <Swiper className="image-swiper" lazyRender autoplay={4000}>
        <Swiper.Indicator />
        <Swiper.Item>
          <Image
            className="image"
            src="https://img01.yzcdn.cn/vant/apple-1.jpg"
          />
        </Swiper.Item>
        <Swiper.Item>
          <Image
            className="image"
            src="https://img01.yzcdn.cn/vant/apple-2.jpg"
          />
        </Swiper.Item>
        <Swiper.Item>
          <Image
            className="image"
            src="https://img01.yzcdn.cn/vant/apple-3.jpg"
          />
        </Swiper.Item>
        <Swiper.Item>
          <Image
            className="image"
            src="https://img01.yzcdn.cn/vant/apple-4.jpg"
          />
        </Swiper.Item>
      </Swiper>
      <Text>Hello world!</Text>
      <Button color="primary">主要按钮</Button>
      <Button color="info">信息按钮</Button>
      <Button color="success">成功按钮</Button>
      <Button color="warning">警告按钮</Button>
      <Button color="danger">危险按钮</Button>
      <Button color="default">默认按钮</Button>
    </View>
  );
}
