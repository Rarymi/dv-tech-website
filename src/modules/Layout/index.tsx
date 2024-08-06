import { Content } from "./components/Content.tsx";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`flex flex-col w-full `}>
      <Header />
      <div>
        <Content>{children}</Content>
      </div>
      <Footer />
    </div>
  );
};
