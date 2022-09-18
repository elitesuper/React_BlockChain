import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css";
import "./assets/css/styles.css"
import { Layout } from "antd";
import AppHeader from "./components/common/AppHeader";
import AppFooter from "./components/common/AppFooter";
import routes from "./views";
const { Header, Content, Footer } = Layout;


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function App() {


  return (

    <Layout className="mainLayout">
      <BrowserRouter>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Routes>
            {
              routes.map((data, index) => (
                <Route exact={true} path={data.path} element={data.component} key={index}></Route>
              ))
            }
          </Routes>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
