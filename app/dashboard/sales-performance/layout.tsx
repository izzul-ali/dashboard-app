interface LayoutComponent {
  children: React.ReactNode;
  reason: React.ReactNode;
  graph: React.ReactNode;
  watch: React.ReactNode;
  owner: React.ReactNode;
}

export default function Layout({ children, owner, reason, watch, graph }: LayoutComponent) {
  return (
    <div className="min-h-full p-2 rounded bg-white dark:bg-gray-950">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Deals to watch</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {/* {children} */}
        {reason}
        {graph}
        {watch}
        {owner}
      </div>
    </div>
  );
}
