import { View, Image } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import { Swiper } from "@taroify/core";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <View className="text-[#acc855] text-[100px]">1Hello world!</View>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
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
    </View>
  );
}
