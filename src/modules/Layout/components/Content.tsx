interface ContentProps {
  children?: React.ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return <div className={`flex flex-col`}>{children}</div>;
};
