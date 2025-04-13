"use client";

import { useState, useImperativeHandle, Ref } from "react";
import styles from "./index.module.css";

// 定义子组件暴露的 API 类型
export type LuckyDrawRef = {
  run: () => void;
};

// interface Lottery {
//   name: string;
//   tel: string;
// }

interface LuckyDrawProps {
  lotteryList: string[];
  winner: string;
  ref: Ref<LuckyDrawRef>;
  placeholder?: string;
}

export default function LuckyDraw({
  ref,
  lotteryList,
  winner,
  placeholder = "开始",
}: LuckyDrawProps) {
  const [isRun, setIsRun] = useState(false);
  const [change, setChange] = useState<string[]>([placeholder]);

  useImperativeHandle(ref, () => ({
    run: () => {
      setIsRun(true);
      setChange([placeholder]);
      setTimeout(() => {
        setChange([winner]);
      }, 2000);
      setTimeout(() => {
        setIsRun(false);
      }, 15500);
    },
  }));

  const sssss = [...lotteryList, ...change];

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
