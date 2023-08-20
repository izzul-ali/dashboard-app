'use client';

import { useState } from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';

export default function SwitchTheme() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <button onClick={() => setIsDark((prev) => !prev)} className="">
      {isDark ? <BsMoonStars /> : <BsSun />}
    </button>
  );
}
