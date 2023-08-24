export default function Layout({ children, health }: { children: React.ReactNode; health: React.ReactNode }) {
  return (
    <div className="min-h-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded p-4">
      {children}
      {health}
    </div>
  );
}
