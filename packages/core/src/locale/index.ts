import en from "./en";
import ru from "./ru";
import zh from "./zh";
import es from "./es";
import hi from "./hi";
import zh_tw from "./zh_tw";
import { Context } from "..";

// @ts-ignore
const localeObj: Record<string, typeof zh> = { en, ru, zh, es, "zh-TW": zh_tw, hi };

function locale(ctx: Context) {
  const langsToTry = [ctx.lang || "", ctx.lang?.split("-")[0] || ""];
  for (let i = 0; i < langsToTry.length; i += 1) {
    if (langsToTry[i] in localeObj) {
      return localeObj[langsToTry[i]];
    }
  }
  return localeObj.ru;
}

export { locale };
