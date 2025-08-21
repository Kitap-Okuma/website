/* eslint-disable no-unused-vars */
import { writable } from "svelte/store";

export enum Themes {
  Light = 0,
  Dark = 1,
  Darker = 2,
}

const storedTheme = localStorage.getItem("theme");
export const theme = writable<Themes>(
  storedTheme ? (parseInt(storedTheme) as Themes) : Themes.Light
);

theme.subscribe((t) => {
  localStorage.setItem("theme", t.toString());
  document.documentElement.setAttribute("data-theme", t.toString());
});

export const isMobile = writable<boolean>(false);

const mql = window.matchMedia("(max-width: 768px)");
const updateDevice = (e: MediaQueryListEvent | MediaQueryList) => {
  isMobile.set(e.matches);
};
updateDevice(mql);
mql.addEventListener("change", updateDevice);
