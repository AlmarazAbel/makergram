interface AppHeaderProps {
  title: string;
  containerClassName?: string;
}

export function AppHeader({
  title,
  containerClassName = "max-w-lg mx-auto",
}: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-card-bg border-b border-border">
      <div
        className={`px-4 py-3 flex items-center justify-between gap-3 ${containerClassName}`}
      >
        <div className="flex items-center min-w-0 flex-1">
          <h1 className="flex-1 text-center text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}
