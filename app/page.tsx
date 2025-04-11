import Image from "next/image";
import "./page.css";

export default function Home() {
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
          <div className="box"></div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          xxx
        </footer>
      </div>
    </div>
  );
}
