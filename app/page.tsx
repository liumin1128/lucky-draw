"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import LuckyDraw, { LuckyDrawRef } from "./components/LuckyDraw";
import Settings from "./components/Settings";
import "./page.css";

function hideSensitiveInfo(str: string) {
  // 处理姓名：匹配中文姓名（2-4个汉字），保留第一个字，其余替换为*
  const nameRegex = /([\u4e00-\u9fa5]{2,4})/g;
  str = str.replace(nameRegex, (match) => {
    return match[0] + "*".repeat(match.length - 1);
  });

  // 处理电话号码：将中间4位替换为*
  const phoneRegex = /(\d{3})(\d{4})(\d{4})/g;
  str = str.replace(phoneRegex, "$1****$3");

  return str;
}

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

// const str1111 = `李明 13800138000,王芳 13800138001,张伟 13800138002,刘洋 13800138003,陈静 13800138004,杨光 13800138005,黄磊 13800138006,赵敏 13800138007,周杰 13800138008,吴倩 13800138009,徐强 13800138010,孙丽 13800138011,胡军 13800138012,郭涛 13800138013,何静 13800138014,高伟 13800138015,林峰 13800138016,马超 13800138017,罗敏 13800138018,梁杰 13800138019,宋佳 13800138020,谢娜 13800138021,唐嫣 13800138022,冯绍峰 13800138023,韩雪 13800138024,邓超 13800138025,曹颖 13800138026,彭于晏 13800138027,袁泉 13800138028,潘粤明 13800138029,董洁 13800138030,于娜 13800138031,蒋欣 13800138032,蔡依林 13800138033,余文乐 13800138034,杜淳 13800138035,任泉 13800138036,沈腾 13800138037,贾乃亮 13800138038,白百何 13800138039,陆毅 13800138040,文章 13800138041,李晨 13800138042,陈赫 13800138043,郑恺 13800138044,王宝强 13800138045,黄晓明 13800138046,范冰冰 13800138047,李冰冰 13800138048,赵薇 13800138049,周迅 13800138050,章子怡 13800138051,徐静蕾 13800138052,刘亦菲 13800138053,杨幂 13800138054,唐嫣 13800138055,刘诗诗 13800138056,倪妮 13800138057,Angelababy 13800138058,迪丽热巴 13800138059,杨颖 13800138060,赵丽颖 13800138061,杨紫 13800138062,关晓彤 13800138063,张天爱 13800138064,古力娜扎 13800138065,景甜 13800138066,林允 13800138067,宋茜 13800138068,李沁 13800138069,谭松韵 13800138070,张雪迎 13800138071,吴谨言 13800138072,金晨 13800138073,张含韵 13800138074,李一桐 13800138075,陈钰琪 13800138076,白鹿 13800138077,鞠婧祎 13800138078,程潇 13800138079,孟美岐 13800138080,吴宣仪 13800138081,杨超越 13800138082,赖美云 13800138083,张紫宁 13800138084,傅菁 13800138085,徐梦洁 13800138086,段奥娟 13800138087,Yamy 13800138088,李紫婷 13800138089,Sunnee 13800138090,高秋梓 13800138091,刘人语 13800138092,强东玥 13800138093,陈意涵 13800138094,王菊 13800138095,李子璇 13800138096,吴映香 13800138097,刘丹萌 13800138098,罗奕佳 13800138099,苏芮琪 13800138100,张溪 13800138101,江璟儿 13800138102,张鑫磊 13800138103,王莫涵 13800138104,刘思纤 13800138105,罗智仪 13800138106,杜金雨 13800138107,杨蕊菡 13800138108,张楚寒 13800138109,范薇 13800138110,陈芳语 13800138111`;
// // const str1111 = `李明 13800138000,王芳 13800138001,张伟 13800138002`;

// const allData = str1111.split(",");

export default function Home() {
  const childRef = useRef<LuckyDrawRef>(null);
  const [remainingElements, setRemainingElements] = useState<string[]>([]);
  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const [selectCount, setSelectCount] = useState<number>(3);
  const [playerList, setPlayerList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [defaultWinnerList, setDefaultWinnerList] = useState<string[]>([]);
  const [winnerList, setWinnerList] = useState<string[]>([]);
  const [showButton, setShowButton] = useState<boolean>(true);
  const [showTime, setShowTime] = useState<number>(5000);
  const [title, setTitle] = useState<string>("感恩大抽奖");

  const reset = () => {
    setSelectedElements([]);
    setRemainingElements([]);
    setCurrentIndex(-1);
    setWinnerList([]);
    childRef.current?.reStart();
  };

  const handleClick = () => {
    console.log("xxxxxxxx", defaultWinnerList);

    if (!playerList.length) {
      alert("请先设置抽奖名单");
      return;
    }

    if (currentIndex === -1) {
      if (defaultWinnerList.length > 0) {
        console.log("xxxxxxxx", defaultWinnerList);

        // 如果有默认中奖名单, 先将中奖名单设置为默认中奖名单

        const selectedElements = defaultWinnerList;

        // 筛选出剩下的元素
        const remainingElements = playerList.filter(
          (i) => defaultWinnerList.findIndex((j) => i === j) === -1
        );

        setSelectedElements(selectedElements);
        setRemainingElements(remainingElements);
        setCurrentIndex(0);
        childRef.current?.run(selectedElements[0], () => {
          setWinnerList([...winnerList, selectedElements[0]]);
        });

        return;
      }

      // 第一次点击,初始化抽奖
      const selectedIndices = getMultiRandomInt(
        0,
        playerList.length - 1,
        selectCount
      );

      // 筛选出指定下标的元素
      const selectedElements = playerList.filter((_, index: number) =>
        selectedIndices.includes(index)
      );

      // 筛选出剩下的元素
      const remainingElements = playerList.filter(
        (_, index: number) => !selectedIndices.includes(index)
      );

      setSelectedElements(selectedElements);
      setRemainingElements(remainingElements);
      setCurrentIndex(0);
      childRef.current?.run(selectedElements[0], () => {
        setWinnerList([...winnerList, selectedElements[0]]);
      });
      return;
    }

    if (currentIndex >= selectCount - 1) {
      alert("抽奖结束");
      // 结束抽奖
      reset();
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    // 访问子组件暴露的 DOM 或方法
    childRef.current?.run(selectedElements[currentIndex + 1], () => {
      setWinnerList([...winnerList, selectedElements[currentIndex + 1]]);
    });
  };

  const useEnterKey = (callback: () => void) => {
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") callback();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [callback]);
  };

  useEnterKey(() => {
    console.log("自定义 Hook 监听到回车");
    handleClick();
  });

  console.log("playerList", playerList);
  console.log("remainingElements", remainingElements);
  console.log("selectedElements", selectedElements);

  return (
    <div className="root">
      {/* <Image
        className="logo"
        src="/logo.png"
        alt="Next.js logo"
        width={180}
        height={149}
        priority
      /> */}
      <div className="">
        <main className="gap-[32px] flex justify-center flex-wrap pt-24">
          <h1 className="w-full text-center text-[72px] font-bold gradient-text">
            {title}
          </h1>
          <div className="w-full flex justify-center items-center">
            <LuckyDraw
              time={showTime}
              lotteryList={remainingElements}
              ref={childRef}
            />
          </div>

          {showButton && (
            <button
              onClick={() => {
                handleClick();
              }}
              className="start-button mt-8"
            >
              点击抽奖
            </button>
          )}

          <div className="mt-4 w-full text-[20px] text-center font-bold text-white h-3">
            {winnerList.length > 0 ? `中奖名单` : ""}
          </div>

          <div className="flex justify-center items-center space-x-4 w-full h-8">
            {winnerList
              .map((i) => hideSensitiveInfo(i))
              .map((i) => {
                return (
                  <div
                    key={i}
                    className="text-[20px] text-center font-bold bg-[rgba(255,255,255,0.1)] text-[#FFE1AD] p-2 rounded-sm"
                  >
                    {i}
                  </div>
                );
              })}
          </div>
        </main>

        <div className="setting">
          <Settings
            onSubmit={(values) => {
              console.log("onSubmit", values);
              setPlayerList(values.player.split(","));
              if (values.winner) {
                const list = values.winner.split(",");
                setSelectCount(list.length);
                setDefaultWinnerList(list);
              } else {
                setSelectCount(values.selectCount);
              }
              if (values.title) {
                setTitle(values.title);
              }
              setShowButton(values.showButton);
              if (showTime) {
                setShowTime(values.showTime);
              }
              reset();
            }}
          />
        </div>

        {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          xxx
        </footer> */}
      </div>
    </div>
  );
}
