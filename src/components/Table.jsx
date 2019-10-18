import React from "react";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import Content from "../containers/Content";
import {Layout} from "antd";

function Table(props) {
  return (
    <Layout>
      <Header/>
      <Content />
      <Footer/>
    </Layout>
  );
}

export default Table;
