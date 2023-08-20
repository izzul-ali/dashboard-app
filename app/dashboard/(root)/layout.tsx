interface IRootLayout {
  history: React.ReactNode;
  overview: React.ReactNode;
  changes: React.ReactNode;
}

export default function RootLayout({ history, changes, overview }: IRootLayout) {
  return (
    <div className="">
      {history}
      <div className="md:flex gap-x-4 mt-5">
        {changes}
        {overview}
      </div>
    </div>
  );
}
