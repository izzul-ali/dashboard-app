import Header from '~/components/header';
import Sidebar from '~/components/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="p-4">{children}</div>
      </div>
    </main>
  );
}
