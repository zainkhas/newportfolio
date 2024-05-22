"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "@/svg/SunIcon";
import { MoonIcon } from "@/svg/MoonIcon";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onValueChange = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  if (!mounted) return null;

  return (
    <Switch
      size="lg"
      color="secondary"
      onChange={onValueChange}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    />
  );
};
