import React from "react";
import "./App.css";
import "./assets/css/styles.css"
import { Layout } from "antd";
import AppHeader from "./components/common/AppHeader";
import AppHome from "./views/AppHome";
import AppFooter from "./components/common/AppFooter";
const { Header, Content, Footer } = Layout;

function App() {


  return (

    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>

    </Layout>
  );
}

export default App;
