export const getLocalStorageTheme = (): "light" | "dark" => {
  let theme: "light" | "dark" = "dark";
  if (typeof window !== "undefined") {
    theme =
      (window.localStorage.getItem("theme") as "light" | "dark") ?? "light";
  }
  return theme;
};

export const setLocalStorageTheme = (value: "light" | "dark"): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", value);
  }
};
