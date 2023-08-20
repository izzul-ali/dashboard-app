'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, memo, Dispatch, SetStateAction } from 'react';
import { IconType } from 'react-icons';
import { PiChartLineUpLight } from 'react-icons/pi';
import { GiHealthPotion } from 'react-icons/gi';
import { HiOutlineMenuAlt2, HiOutlineChartBar } from 'react-icons/hi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { SiApacheecharts } from 'react-icons/si';

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setOpenSidebar((prev) => !prev)}
        className={`origin-left transition-all duration-200 ${
          openSidebar ? 'fixed' : 'hidden'
        } z-10 top-0 left-0 right-0 h-screen bg-black/10 lg:hidden`}
      ></div>

      <aside
        className={`p-4 lg:px-7 absolute z-20 left-0 h-screen bg-white w-fit transition-transform duration-200 ease-in ${
          openSidebar ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0`}
      >
        <button
          type="button"
          onClick={() => setOpenSidebar((prev) => !prev)}
          className={`${openSidebar ? 'hidden' : 'absolute'} lg:hidden -right-6 top-5 text-lg`}
        >
          <HiOutlineMenuAlt2 />
        </button>

        <div className="flex items-center gap-x-2 text-lg mb-10">
          <SiApacheecharts />
          <h1 className="font-bold text-gray-700">SalesGang</h1>
        </div>

        <Navbar hideSidebar={setOpenSidebar} />

        <div className="absolute bottom-4 flex items-center gap-x-2">
          <div className="p-3 rounded bg-blue-700"></div>
          <span className="text-sm font-semibold text-gray-800">Michael</span>
        </div>
      </aside>
    </>
  );
}

type NavMenu = {
  icon: ReturnType<IconType>;
  title: string;
  url: string;
};

const navMenus: NavMenu[] = [
  {
    icon: <LuLayoutDashboard />,
    title: 'Dashboard',
    url: '/dashboard'
  },
  {
    icon: <GiHealthPotion />,
    title: 'Pipeline Health',
    url: '/dashboard/pipeline-health'
  },
  {
    icon: <HiOutlineChartBar />,
    title: 'Pipeline Progress',
    url: '/dashboard/pipeline-progress'
  },
  {
    icon: <PiChartLineUpLight />,
    title: 'Sales Performance',
    url: '/dashboard/sales-performance'
  }
];

const Navbar = memo(navbar);

function navbar({ hideSidebar }: { hideSidebar: Dispatch<SetStateAction<boolean>> }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {navMenus.map((menu) => {
        return (
          <Link
            key={menu.title}
            onClick={() => hideSidebar(false)}
            href={menu.url}
            className={`flex items-center gap-x-4 p-2 rounded ${
              pathname === menu.url && 'bg-blue-100 text-blue-700'
            } hover:bg-blue-50 hover:text-blue-500 cursor-pointer text-base`}
          >
            {menu.icon}
            <span className="whitespace-nowrap text-sm font-semibold">{menu.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
