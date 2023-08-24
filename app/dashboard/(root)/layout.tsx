interface IRootLayout {
  history: React.ReactNode;
  overview: React.ReactNode;
  changes: React.ReactNode;
}

export default function RootLayout({ history, changes, overview }: IRootLayout) {
  return (
    <div className="w-full dark:bg-gray-950 p-2 rounded">
      <div className="w-full mb-10 space-y-5 md:space-y-0 md:flex md:justify-cemter md:gap-x-4">
        {changes}
        {overview}
      </div>
      {history}
    </div>
  );
}
