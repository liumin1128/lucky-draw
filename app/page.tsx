"use client";

import React, { useRef } from "react";
import Image from "next/image";
import LuckyDraw, { LuckyDrawRef } from "./components/LuckyDraw";
import "./page.css";

const sss = [
  { name: "李明", tel: "13800138000" },
  { name: "王芳", tel: "13800138001" },
  { name: "张伟", tel: "13800138002" },
  { name: "刘洋", tel: "13800138003" },
  { name: "陈静", tel: "13800138004" },
  { name: "杨光", tel: "13800138005" },
  { name: "黄磊", tel: "13800138006" },
  { name: "赵敏", tel: "13800138007" },
  { name: "周杰", tel: "13800138008" },
  { name: "吴倩", tel: "13800138009" },
  { name: "徐强", tel: "13800138010" },
  { name: "孙丽", tel: "13800138011" },
  { name: "胡军", tel: "13800138012" },
  { name: "郭涛", tel: "13800138013" },
  { name: "何静", tel: "13800138014" },
  { name: "高伟", tel: "13800138015" },
  { name: "林峰", tel: "13800138016" },
  { name: "马超", tel: "13800138017" },
  { name: "罗敏", tel: "13800138018" },
  { name: "梁杰", tel: "13800138019" },
  { name: "宋佳", tel: "13800138020" },
  { name: "谢娜", tel: "13800138021" },
  { name: "唐嫣", tel: "13800138022" },
  { name: "冯绍峰", tel: "13800138023" },
  { name: "韩雪", tel: "13800138024" },
  { name: "邓超", tel: "13800138025" },
  { name: "曹颖", tel: "13800138026" },
  { name: "彭于晏", tel: "13800138027" },
  { name: "袁泉", tel: "13800138028" },
  { name: "潘粤明", tel: "13800138029" },
  { name: "董洁", tel: "13800138030" },
  { name: "于娜", tel: "13800138031" },
  { name: "蒋欣", tel: "13800138032" },
  { name: "蔡依林", tel: "13800138033" },
  { name: "余文乐", tel: "13800138034" },
  { name: "杜淳", tel: "13800138035" },
  { name: "任泉", tel: "13800138036" },
  { name: "沈腾", tel: "13800138037" },
  { name: "贾乃亮", tel: "13800138038" },
  { name: "白百何", tel: "13800138039" },
  { name: "陆毅", tel: "13800138040" },
  { name: "文章", tel: "13800138041" },
  { name: "李晨", tel: "13800138042" },
  { name: "陈赫", tel: "13800138043" },
  { name: "郑恺", tel: "13800138044" },
  { name: "王宝强", tel: "13800138045" },
  { name: "黄晓明", tel: "13800138046" },
  { name: "范冰冰", tel: "13800138047" },
  { name: "李冰冰", tel: "13800138048" },
  { name: "赵薇", tel: "13800138049" },
  { name: "周迅", tel: "13800138050" },
  { name: "章子怡", tel: "13800138051" },
  { name: "徐静蕾", tel: "13800138052" },
  { name: "刘亦菲", tel: "13800138053" },
  { name: "杨幂", tel: "13800138054" },
  { name: "唐嫣", tel: "13800138055" },
  { name: "刘诗诗", tel: "13800138056" },
  { name: "倪妮", tel: "13800138057" },
  { name: "Angelababy", tel: "13800138058" },
  { name: "迪丽热巴", tel: "13800138059" },
  { name: "杨颖", tel: "13800138060" },
  { name: "赵丽颖", tel: "13800138061" },
  { name: "杨紫", tel: "13800138062" },
  { name: "关晓彤", tel: "13800138063" },
  { name: "张天爱", tel: "13800138064" },
  { name: "古力娜扎", tel: "13800138065" },
  { name: "景甜", tel: "13800138066" },
  { name: "林允", tel: "13800138067" },
  { name: "宋茜", tel: "13800138068" },
  { name: "李沁", tel: "13800138069" },
  { name: "谭松韵", tel: "13800138070" },
  { name: "张雪迎", tel: "13800138071" },
  { name: "吴谨言", tel: "13800138072" },
  { name: "金晨", tel: "13800138073" },
  { name: "张含韵", tel: "13800138074" },
  { name: "李一桐", tel: "13800138075" },
  { name: "陈钰琪", tel: "13800138076" },
  { name: "白鹿", tel: "13800138077" },
  { name: "鞠婧祎", tel: "13800138078" },
  { name: "程潇", tel: "13800138079" },
  { name: "孟美岐", tel: "13800138080" },
  { name: "吴宣仪", tel: "13800138081" },
  { name: "杨超越", tel: "13800138082" },
  { name: "赖美云", tel: "13800138083" },
  { name: "张紫宁", tel: "13800138084" },
  { name: "傅菁", tel: "13800138085" },
  { name: "徐梦洁", tel: "13800138086" },
  { name: "段奥娟", tel: "13800138087" },
  { name: "Yamy", tel: "13800138088" },
  { name: "李紫婷", tel: "13800138089" },
  { name: "Sunnee", tel: "13800138090" },
  { name: "高秋梓", tel: "13800138091" },
  { name: "刘人语", tel: "13800138092" },
  { name: "强东玥", tel: "13800138093" },
  { name: "陈意涵", tel: "13800138094" },
  { name: "王菊", tel: "13800138095" },
  { name: "李子璇", tel: "13800138096" },
  { name: "吴映香", tel: "13800138097" },
  { name: "刘丹萌", tel: "13800138098" },
  { name: "罗奕佳", tel: "13800138099" },
  { name: "苏芮琪", tel: "13800138100" },
  { name: "张溪", tel: "13800138101" },
  { name: "江璟儿", tel: "13800138102" },
  { name: "张鑫磊", tel: "13800138103" },
  { name: "王莫涵", tel: "13800138104" },
  { name: "刘思纤", tel: "13800138105" },
  { name: "罗智仪", tel: "13800138106" },
  { name: "杜金雨", tel: "13800138107" },
  { name: "杨蕊菡", tel: "13800138108" },
  { name: "张楚寒", tel: "13800138109" },
  { name: "范薇", tel: "13800138110" },
  { name: "陈芳语", tel: "13800138111" },
];

const list = new Array(120).fill("x").map((i, index) => {
  return sss[index % sss.length];
});

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMultiRandomInt(min: number, max: number, count: number) {
  const arr: number[] = [];
  while (arr.length < count) {
    const randomInt = getRandomInt(min, max);
    if (!arr.includes(randomInt)) {
      arr.push(randomInt);
    }
  }
  return arr;
}

function filterArray(originalArray, selectedIndices) {
  // 筛选出指定下标的元素
  const selectedElements = originalArray.filter((_, index: number) =>
    selectedIndices.includes(index)
  );

  // 筛选出剩下的元素
  const remainingElements = originalArray.filter(
    (_, index: number) => !selectedIndices.includes(index)
  );

  return remainingElements;
}

export default function Home() {
  const childRef = useRef<LuckyDrawRef>(null);

  const handleClick = () => {
    // 访问子组件暴露的 DOM 或方法
    childRef.current?.run();
  };

  return (
    <div className="root">
      <Image
        className="logo"
        src="/logo.png"
        alt="Next.js logo"
        width={343}
        height={149}
        priority
      />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="w-full text-center text-[72px] font-bold gradient-text">
            感恩大抽奖
          </h1>
          <div className="box">
            <LuckyDraw
              lotteryList={list.map((i) => i.name)}
              winner={"韩立"}
              ref={childRef}
            />
          </div>

          <button
            onClick={() => {
              handleClick();
            }}
          >
            start
          </button>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          xxx
        </footer>
      </div>
    </div>
  );
}
