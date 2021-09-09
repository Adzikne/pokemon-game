import Header from "./components/Header/header";
import Layout from "./components/Layout/layout";
import Footer from "./components/Footer/footer";
import Image from "./components/Layout/bg1.jpg";
import './index.css';

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
      urlBg={urlBg}
    />
    <Layout 
      title="This is new title"
      descr="This is new description!"
      colorBg={colorBg}
    />
    <Layout 
      title="This is new title"
      descr="This is new description!"
      urlBg={urlBg}
    />
    <Footer />
  </>
  );
}

export default App;
