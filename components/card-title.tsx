import { PiWarningCircle } from 'react-icons/pi';

export default function CardTitle({ children, title }: { children: React.ReactNode; title: React.ReactNode }) {
  return (
    <div className="w-full p-2 rounded border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-x-2 mb-5">
        <h1 className="text-lg font-bold text-gray-900 dark:text-gray-200">{title}</h1>
        <div className="flex items-center relative">
          <PiWarningCircle className="text-gray-500 dark:text-gray-400 cursor-pointer z-10 peer" />
          <span className="whitespace-nowrap transition-opacity duration-200 opacity-0 peer-hover:opacity-100 absolute right-0 translate-x-full -top-5 text-xs px-3 py-1 rounded border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 break-all">
            {title}
          </span>
        </div>
      </div>

      {children}
    </div>
  );
}
