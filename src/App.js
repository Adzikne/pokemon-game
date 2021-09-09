import Header from "./components/Header/header";
import Layout from "./components/Layout/layout";
import Footer from "./components/Footer/footer";
import Bg1 from "./components/Layout/bg1.jpg";
import Bg2 from "./components/Layout/bg3.jpg";
import "./index.css";

const App = () => {
  return (
    <>
    <Header 
      title="This is new title"
      descr="This is new description!"
    />
    <Layout 
      title="This is new title"
      descr="This is new description!"
      urlBg={Bg1}
    />
    <Layout 
      title="This is new title"
      descr="This is new description!"
      colorBg="red"
    />
    <Layout 
      title="This is new title"
      descr="This is new description!"
      urlBg={Bg2}
    />
    <Footer />
  </>
  );
}

export default App;
