"use client";

import { useState, useImperativeHandle, Ref, useEffect } from "react";
import styles from "./index.module.css";

function hideSensitiveInfo(str: string) {
  if (str === "开始") {
    return str;
  }

  if (typeof str !== "string") {
    return str;
  }

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

// 定义子组件暴露的 API 类型
export type LuckyDrawRef = {
  run: (winner: string, cb: () => void) => void;
  reStart: () => void;
};

// interface Lottery {
//   name: string;
//   tel: string;
// }

interface LuckyDrawProps {
  lotteryList: string[];
  // winner: string;
  ref: Ref<LuckyDrawRef>;
  placeholder?: string;
  time?: number;
}

export default function LuckyDraw({
  ref,
  lotteryList,
  placeholder = "开始",
  time = 15000,
}: LuckyDrawProps) {
  const [isRun, setIsRun] = useState(false);
  const [change, setChange] = useState<string[]>([placeholder]);

  useImperativeHandle(ref, () => ({
    run: (winner: string, cb: () => void) => {
      console.log("time", time, styles.container);
      const container = document.querySelector(
        "." + styles.container
      ) as HTMLElement;
      container.style.setProperty("--animation-time", time / 1000 + "s");

      setIsRun(true);
      // setChange([placeholder]);
      setTimeout(() => {
        setChange([winner]);
      }, time * 0.5);
      setTimeout(() => {
        setIsRun(false);
        cb();
      }, time);
    },
    reStart: () => {
      setChange([placeholder]);
    },
  }));

  const sssss = [
    ...new Array(120).fill("x").map((i, index) => {
      return lotteryList[index % lotteryList.length];
    }),
    ...change,
  ].map((i) => hideSensitiveInfo(i));

  // const aaa = getMultiRandomInt(0, sssss.length - 1, 4);

  // console.log("aaa", aaa);

  return (
    <div className={`${styles.container} ${isRun ? styles.running : ""}`}>
      <div className={styles.box}>
        <div className={styles.ring}>
          {sssss.map((i, index) => {
            return (
              <div
                key={index}
                className={styles.item}
                style={{
                  transform: `rotateX(${
                    (360 / sssss.length) * (index + 1)
                  }deg) translateZ(var(--radius))`,
                }}
              >
                {i}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
