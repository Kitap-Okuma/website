import { writable } from "svelte/store";
import Cookies from "js-cookie";
export enum Themes {
  // eslint-disable-next-line no-unused-vars
  Light = 0,
  // eslint-disable-next-line no-unused-vars
  Dark = 1,
  // eslint-disable-next-line no-unused-vars
  Darker = 2,
}
// theme store (0=light, 1=dark, 2=darker)
export const theme = writable<Themes>(Themes.Light);

export const isMobile = writable<boolean>(false);

export function initTheme() {
  const cookieTheme = Cookies.get("theme");
  if (cookieTheme !== undefined) {
    const t = parseInt(cookieTheme);
    theme.set(t);
    document.documentElement.setAttribute("data-theme", t.toString());
  }

  theme.subscribe((t) => {
    Cookies.set("theme", t.toString(), { expires: 30 });
    document.documentElement.setAttribute("data-theme", t.toString());
  });
}

export function initIsMobile() {
  const mql = window.matchMedia("(max-width: 768px)");
  const update = (e: MediaQueryListEvent | MediaQueryList) => {
    isMobile.set(e.matches);
  };
  update(mql);
  mql.addEventListener("change", update);

  return () => mql.removeEventListener("change", update);
}
