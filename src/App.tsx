import { Home } from "./modules/Home";
import { About } from "./modules/About";
import { Layout } from "./modules/Layout";
import { Contacts } from "./modules/Contacts";
import { Feedbacks } from "./modules/Feedbacks";
import { Element } from "react-scroll";

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Element className={`flex flex-col`} name={"contact"}>
        <Feedbacks />
        <Contacts />
      </Element>
    </Layout>
  );
}

export default App;
