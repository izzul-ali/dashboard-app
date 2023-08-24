import Header from '~/components/header';
import Sidebar from '~/components/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-screen overflow-hidden flex">
      <Sidebar />
      <div className="flex-grow w-full h-full pb-20 dark:bg-gray-900">
        <Header />
        <div className="p-2 h-full overflow-y-scroll">{children}</div>
      </div>
    </main>
  );
}
