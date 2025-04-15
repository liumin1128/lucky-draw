import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  //   DialogDescription,
  DialogFooter,
  DialogHeader,
  //   DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export interface FormValues {
  player: string;
  winner: string;
  title: string;
  showButton: boolean;
  selectCount: number;
  showTime: number;
}

export default function Settingss({
  onSubmit,
}: {
  onSubmit: (values: FormValues) => void;
}) {
  const form = useForm({
    defaultValues: {
      player: "",
      winner: "",
      title: "",
      showButton: true,
      //   player:
      //     "李明 13800138000,王芳 13800138001,张伟 13800138002,刘洋 13800138003,陈静 13800138004,杨光 13800138005,黄磊 13800138006,赵敏 13800138007,周杰 13800138008,吴倩 13800138009,徐强 13800138010,孙丽 13800138011,胡军 13800138012,郭涛 13800138013,何静 13800138014,高伟 13800138015,林峰 13800138016,马超 13800138017,罗敏 13800138018,梁杰 13800138019,宋佳 13800138020,谢娜 13800138021,唐嫣 13800138022,冯绍峰 13800138023,韩雪 13800138024,邓超 13800138025,曹颖 13800138026,彭于晏 13800138027,袁泉 13800138028,潘粤明 13800138029,董洁 13800138030,于娜 13800138031,蒋欣 13800138032,蔡依林 13800138033,余文乐 13800138034,杜淳 13800138035,任泉 13800138036,沈腾 13800138037,贾乃亮 13800138038,白百何 13800138039,陆毅 13800138040,文章 13800138041,李晨 13800138042,陈赫 13800138043,郑恺 13800138044,王宝强 13800138045,黄晓明 13800138046,范冰冰 13800138047,李冰冰 13800138048,赵薇 13800138049,周迅 13800138050,章子怡 13800138051,徐静蕾 13800138052,刘亦菲 13800138053,杨幂 13800138054,唐嫣 13800138055,刘诗诗 13800138056,倪妮 13800138057,Angelababy 13800138058,迪丽热巴 13800138059,杨颖 13800138060,赵丽颖 13800138061,杨紫 13800138062,关晓彤 13800138063,张天爱 13800138064,古力娜扎 13800138065,景甜 13800138066,林允 13800138067,宋茜 13800138068,李沁 13800138069,谭松韵 13800138070,张雪迎 13800138071,吴谨言 13800138072,金晨 13800138073,张含韵 13800138074,李一桐 13800138075,陈钰琪 13800138076,白鹿 13800138077,鞠婧祎 13800138078,程潇 13800138079,孟美岐 13800138080,吴宣仪 13800138081,杨超越 13800138082,赖美云 13800138083,张紫宁 13800138084,傅菁 13800138085,徐梦洁 13800138086,段奥娟 13800138087,Yamy 13800138088,李紫婷 13800138089,Sunnee 13800138090,高秋梓 13800138091,刘人语 13800138092,强东玥 13800138093,陈意涵 13800138094,王菊 13800138095,李子璇 13800138096,吴映香 13800138097,刘丹萌 13800138098,罗奕佳 13800138099,苏芮琪 13800138100,张溪 13800138101,江璟儿 13800138102,张鑫磊 13800138103,王莫涵 13800138104,刘思纤 13800138105,罗智仪 13800138106,杜金雨 13800138107,杨蕊菡 13800138108,张楚寒 13800138109,范薇 13800138110,陈芳语 13800138111",
      //   winner:
      //     "赵敏 13800138007,周杰 13800138008,吴倩 13800138009,徐强 13800138010",
      selectCount: 1,
      showTime: 5000,
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {/* <DialogTitle>Edit profile</DialogTitle> */}
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="player"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Players</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="张三 18688889999,李四 18611112222"
                      className="max-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    参与者名单，格式：姓名 电话号码，逗号分割
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="winner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Winners</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="张三 18688889999,李四 18611112222"
                      className="max-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    （选填）中奖者名单，格式：姓名 电话号码，逗号分割
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="selectCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Count</FormLabel>
                  <FormControl>
                    <Input placeholder="1" {...field} />
                  </FormControl>
                  <FormDescription>抽取的中奖人数，默认1人</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="showTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Show Time</FormLabel>
                  <FormControl>
                    <Input placeholder="5000" {...field} />
                  </FormControl>
                  <FormDescription>滚动时间</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Page Title</FormLabel>
                  <FormControl>
                    <Input placeholder="页面标题" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="showButton"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Show Button</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription>
                    是否显示按钮，回车键可以触发抽奖
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogTrigger>
                <Button type="submit">Save changes</Button>
              </DialogTrigger>
            </DialogFooter>
          </form>
        </Form>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
