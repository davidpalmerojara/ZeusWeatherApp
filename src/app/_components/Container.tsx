type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col">
      {children}
    </div>
  );
}
