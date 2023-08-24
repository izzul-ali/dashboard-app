'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import { useState } from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';

export default function NextThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export function SwitchTheme() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(false);

  console.log('current theme: ', theme);
  return (
    <button
      onClick={() =>
        setIsDark((prev) => {
          setTheme(prev ? 'light' : 'dark');
          return !prev;
        })
      }
      className=""
    >
      {isDark ? <BsMoonStars className="dark:text-gray-300 text-base" /> : <BsSun />}
    </button>
  );
}
